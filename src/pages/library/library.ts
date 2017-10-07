import {Component, OnInit} from '@angular/core';
import {Quote} from "../../data/quoute.interface";
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  queryCollection: { category: string, quotes: Quote[], icon: string }[];

  ngOnInit() {
    this.queryCollection = quotes;
  }

}
