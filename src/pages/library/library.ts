import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quoute.interface";
import quotes from '../../data/quotes';
import {QuotesPage} from "../quotes/quotes";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  queryCollection: { category: string, quotes: Quote[], icon: string }[];
  quotePages: QuotesPage;

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {
    this.queryCollection = quotes;
  }

  showQuotes(quote: { category: String, quotes: Quote[], icon: String }) {
    this.navCtrl.push(QuotesPage, quote);
  }
}
