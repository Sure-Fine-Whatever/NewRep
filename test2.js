import StartPage from './page_start';
import Filter from './page_filter';


const startPage = new StartPage(); 
const filter = new Filter();

fixture `Steam`
    .page `https://store.steampowered.com/`;

    test('Second test', async t => {

        await t
        .hover(startPage.yourStore)
        .click(startPage.community)
        .click(filter.filterWindow)
        .click(filter.range)
        .drag(filter.sliderOne,105,0)
        .drag(filter.sliderTwo,-103,0)

        await t
         filter.checkMatch();

        });
