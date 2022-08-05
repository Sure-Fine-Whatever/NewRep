import { t } from 'testcafe';

export default class NamePriceCheck{
    
    async nameAndPriceCheck(name1,name2,price1,price2){
        await t.expect(name1).eql(name2, 'The name of the game is not the same');
        await t.expect(price1).eql(price2, 'The price of the game is not the same');
    
    }
}