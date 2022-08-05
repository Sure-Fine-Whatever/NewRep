import { Selector, t } from 'testcafe';

export default class StartPage {
constructor(){
this.themeTitle = /anime/g;
this.storeTitle = /communityrecommendations/g;
this.yourStore = Selector('#foryou_tab .pulldown_desktop');
this.community = Selector('#foryou_flyout a');
this.Categories = Selector('#genre_tab .pulldown_desktop');
this.theme = Selector('[data-genre-group="themes"] .popup_menu_item');

    }
async themesClicker(link){
    await t
    .hover(this.Categories)
    .click(this.theme.withAttribute('href',link));
}

async communityCliker(link){
    await t
    .hover(this.yourStore)
    .click(this.community.withAttribute('href',link));

}

}
