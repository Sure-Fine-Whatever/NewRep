import GenrePage from './pageGenre.js';
import StartPage from './pageStart';
import AgePage from './pageAge';
import Url from './config';
import NamePriceCheck from './utils.js';
import Game from './pageGame.js';

const url = new Url();
const startPage = new StartPage();
const agePage = new AgePage();
const genrePage = new GenrePage();
const utils = new NamePriceCheck();
const game = new Game();

fixture`Steam`
    .page(url.steam);

test('Top Sell Cheapest Game', async t => {
    await startPage.themesClicker(startPage.themeTitle);
    await genrePage.topSellClicker();
    const priceFirstGame = await genrePage.getGame();
    const nameFirstGame = await genrePage.getGameName();
    await genrePage.selectCheapGame();
    await agePage.ageSelector(agePage.userAge);
    const priceSecondGame = await game.getSecondGame();
    const nameSecondName = await game.getSecondGameName();
    await utils.nameAndPriceCheck(nameFirstGame,nameSecondName,priceFirstGame,priceSecondGame);

});
