import { Selector , t} from 'testcafe';

  export default class AgePage{
    constructor(){
      this.userAge = '1996';
      this.ageYear = Selector('#ageYear');
      this.year = this.ageYear.child('option')
      this.viewPage = Selector('#view_product_page_btn');
    }

  async ageSelector(param){
    const game18 = this.ageYear.exists; 
    if(await game18){
        await t
        .click(this.ageYear)
        .click(this.year.withAttribute('value',param))
        .click(this.viewPage);
    }
  }
  }
 