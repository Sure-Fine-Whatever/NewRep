import { Selector , t } from 'testcafe';

export default class Filter{
constructor(){
this.filterWindow = Selector('#ShowAdvancedControls');
this.range = Selector('#review_playtime_preset_custom');
this.sliderOne = Selector('#app_reviews_playtime_slider a').nth(0);
this.sliderTwo = Selector('#app_reviews_playtime_slider a').nth(1);
this.minRange = Selector('#app_reviews_playtime_range_text_min');
this.maxRange = Selector('#app_reviews_playtime_range_text_max');
this.regex = /[+-]?([0-9]*[.])?[0-9]+/g, '';
}

async customRangeFilterCliker(){
    await t
    .click(this.filterWindow)
    .click(this.range)
    .drag(this.sliderOne,105,0)
    .drag(this.sliderTwo,-103,0);
}

async checkMatch(){

    const firstPoint = Number((await this.minRange.innerText).match(this.regex));
    const secondPoint = Number((await this.maxRange.innerText).match(this.regex));

    console.log(firstPoint);
    console.log(secondPoint);
    
    const hours = Selector('#reviewed_apps').find('.ellipsis');
    const numberofrows = await hours.count;

    for (let i = 0; i < numberofrows; i++) {
        const temp =  Number((await hours.nth(i).innerText).match(this.regex));
        await t.expect(temp).within(firstPoint, secondPoint, 'Games out of range where found.');
        
}
}
}

