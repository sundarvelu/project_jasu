import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LibraryPage} from "../library/library";
import {FavoritesPage} from "../favorites/favorites";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  libraryPage: LibraryPage;
  favoritePage: FavoritesPage;

  constructor(public navCtrl: NavController) {

  }

}
