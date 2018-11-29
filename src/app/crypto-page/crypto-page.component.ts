import { Component, OnInit } from '@angular/core';
import { HttpCoinDataService } from '../http-coin-data.service';
// import { coins } from "./crypto-card/crypto-card.component";

@Component({
  selector: 'app-crypto-page',
  templateUrl: './crypto-page.component.html',
  styleUrls: ['./crypto-page.component.scss']
})
export class CryptoPageComponent implements OnInit {
  // coins;

  public btcData: any;
  public ethData: any;
  public ltcData: any;

  constructor(private _httpCoinDataService: HttpCoinDataService) {}

  ngOnInit() {
    this._httpCoinDataService.getData('BTC').subscribe(res => {
      console.log(res);
      this.btcData = res;
    });
    this._httpCoinDataService.getData('ETH').subscribe(res => {
      console.log(res);
      this.ethData = res;
    });
    this._httpCoinDataService.getData('LTC').subscribe(res => {
      console.log(res);
      this.ltcData = res;
    });
  }

  setCurrency(event) {
    console.log(event);
  }
}
