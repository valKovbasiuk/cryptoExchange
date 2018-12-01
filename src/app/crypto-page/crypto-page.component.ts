import { Component, OnInit, Input } from '@angular/core';
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
      this.btcData = res;
    });
    this._httpCoinDataService.getData('ETH').subscribe(res => {
      this.ethData = res;
    });
    this._httpCoinDataService.getData('LTC').subscribe(res => {
      this.ltcData = res;
    });
  }

  @Input() cryptoCode;

  setCurrency(event) {
    this._httpCoinDataService.getData('BTC', event.target.value).subscribe(res => {
      this.btcData = res;
    });
    this._httpCoinDataService.getData('ETH', event.target.value).subscribe(res => {
      this.ethData = res;
    });
    this._httpCoinDataService.getData('LTC', event.target.value).subscribe(res => {
      this.ltcData = res;
    });
  }
}
