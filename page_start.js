import { Selector } from 'testcafe';

export default class StartPage {
constructor(){

this.yourStore = Selector('#foryou_tab .pulldown_desktop');
this.community = Selector('#foryou_flyout a').nth(1);
this.Catigories = Selector('#genre_tab .pulldown_desktop');
this.Anime = Selector('[data-genre-group="themes"] .popup_menu_item');
    }

}