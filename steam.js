import AnimePage from './page_Anime.js';
import StartPage from './page_start';
import AgePage from './page_age';

const startPage = new StartPage();
const agePage = new AgePage();
const animePage = new AnimePage();

fixture`Steam`
    .page`https://store.steampowered.com/`;

test('First test', async t => {
    await t
        .hover(startPage.Catigories)
        .click(startPage.Anime)
        .click(animePage.topsell)

    const newInfo1 = await animePage.getGame();
    await animePage.getGame();
    await animePage.a();
    await agePage.ageSelector();
    const newInfo2 = await animePage.getSecondGame();
    await animePage.matchCheck(newInfo1, newInfo2);
    

});
