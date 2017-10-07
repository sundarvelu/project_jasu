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
    const modal = this.modalCtrl.create(QuotePage, favorited);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quotesService.removeQuoteFormFavorites(favorited);
        this.quotes = this.quotesService.getFavoriteQuotes();
      }

    });

  }
}

