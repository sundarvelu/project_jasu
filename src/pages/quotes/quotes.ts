import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quoute.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quote: { category: String, quotes: Quote[], icon: String };

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesService) {
  }

  ngOnInit(): void {
    this.quote = this.navParams.data;
  }

  onAddToFavorite(value: Quote) {
    let alertMessage = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorites(value);
          }
        }, {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!')
          }
        }
      ]
    });
    alertMessage.present();
  }
}
