import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quoute.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quote: { category: String, quotes: Quote[], icon: String };

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit(): void {
    this.quote = this.navParams.data;
  }

  onAddToFavorite(value: Quote) {

  }
}
