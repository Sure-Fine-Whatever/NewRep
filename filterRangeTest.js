import StartPage from './pageStart';
import Filter from './pageFilter';
import Url from './config';


const startPage = new StartPage(); 
const filter = new Filter();
const url = new Url();

fixture `Steam`
    .page(url.steam);

    test('Custom game duration range filter', async t => {
        await startPage.communityCliker(startPage.storeTitle);
        await filter.customRangeFilterCliker();
        await filter.checkMatch();
        });
