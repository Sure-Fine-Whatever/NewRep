import { Selector } from 'testcafe';
import {t} from 'testcafe';

  export default class AgePage{
    constructor(){
      this.ageYear = Selector('#ageYear');
      this.year = this.ageYear.child('option').withAttribute('value', '1996');
      this.button = Selector('#view_product_page_btn');
    }

  async ageSelector(){
  const game18 = Selector('#ageYear').exists; 
    if( await game18){
        await t
        .click(this.ageYear)
        .click(this.year)
        .click(this.button)
    }
  }
  }
 