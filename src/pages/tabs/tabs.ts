import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'tab-page',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritePage" tabTitle="Favorites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {

  favoritePage = FavoritesPage;
  libraryPage = LibraryPage;
}
