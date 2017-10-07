import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
  }

  ngOnInit() {

  }

  onClose() {
    this.viewCtrl.dismiss();
  }
}
