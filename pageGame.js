import { Selector } from 'testcafe';

export default class Game {
    constructor() {
        this.game = Selector('.game_purchase_action_bg');
        this.realName = Selector('#appHubAppName');
        this.replaceLetters = /[ a-zA-Z ]/g;
    }

    async getSecondGame() {
        const childTwo = (await this.game.child(0).innerText).replace(this.replaceLetters, '');
        return childTwo;
    }

    async getSecondGameName() {
        const name = this.realName.innerText;
        return name;

    }
}
