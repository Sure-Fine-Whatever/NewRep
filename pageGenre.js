import { Selector, t } from 'testcafe';

export default class GenrePage {
    constructor() {
        this.topsell = Selector('#tab_select_TopSellers .tab_content');
        this.finalPriceSelector = Selector('#TopSellersRows .discount_final_price');
        this.notFreeToPlay = /^\$?\d+(,\d{3})*(\.\d*)?$/;
        this.removeSymbols = /[\$,]/g;

    }

    async topSellClicker() {
        await t.click(this.topsell);
    }

    async selectCheapGame() {
        const gamePrice = await this.getMinPriceGame();
        const cheapestGame = this.finalPriceSelector.withText(gamePrice);
        await t
            .click(cheapestGame);

    }

    async getGameName() {
        const getGamePrice = await this.getMinPriceGame();
        const game = await this.finalPriceSelector.withText(getGamePrice).parent('a');
        const textName = await game.child('.tab_item_content').child('.tab_item_name').innerText;
        console.log(textName);
        return textName;

    }

    async getMinPriceGame() {
        const prices = this.finalPriceSelector;
        const numberofrows = await prices.count;
        const array = [];
        for (let i = 0; i < numberofrows; i++) {
            if ((await prices.nth(i).innerText).match(this.notFreeToPlay) !== null) {
                array.push({
                    price: Number((await prices.nth(i).innerText).replace(this.removeSymbols, ''))
                });
            }
        }
        const minPriceGame = String(array.reduce((a, b) => b.price < a ? b.price : a, Number.MAX_VALUE));
        return minPriceGame;
    }

    async getGame() {
        const getGamePrice = await this.getMinPriceGame();
        const game = this.finalPriceSelector.withText(getGamePrice).parent('a');
        const childOne = await game.child(1).innerText;
        console.log(childOne);
        return childOne;

    }

}

