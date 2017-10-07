import {Component} from '@angular/core';
import {Quote} from "../../data/quoute.interface";
import {QuotesService} from "../../services/quotes";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(favorited: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
}

