import { Selector } from 'testcafe';
import {t} from 'testcafe';

export default class AnimePage{
 constructor(){
this.topsell = Selector('#tab_select_TopSellers .tab_content');
this.gameSelector = Selector('#TopSellersRows .discount_final_price');

}

async a (){
    const gamePrice = await this.getDallaz();
    const b = this.gameSelector.withText(gamePrice);
    await t
    .click(b)

}



async getDallaz() {
    const prices = Selector('#TopSellersRows').find('.discount_final_price');
    const numberofrows = await prices.count;
    const array = [];
    for (let i = 0; i < numberofrows; i++) {
        if ((await prices.nth(i).innerText).match(/^\$?\d+(,\d{3})*(\.\d*)?$/) !== null) {
            array.push({
                price: Number((await prices.nth(i).innerText).replace(/[\$,]/g, ''))
            });
        }
    }
    const minPriceGame = String(array.reduce((a, b) => b.price < a ? b.price : a, Number.MAX_VALUE));
    return minPriceGame;
};



async getGame() {
    const getGamePrice = await this.getDallaz();
    const game = Selector('#TopSellersRows .discount_final_price').withText(getGamePrice).parent('a');
    const childOne = await game.child(1).innerText;
    return childOne;

}

async  getSecondGame(){
    const game = Selector('.game_purchase_action_bg');
    const childTwo = (await game.child(0).innerText).replace(/[ a-zA-Z ]/g, '');
    return childTwo;
}

async matchCheck(param1,param2){
    const compare = (param1 == param2) ? console.log('The same game!') : console.log('Not the same game!');
    return compare;
}
}

