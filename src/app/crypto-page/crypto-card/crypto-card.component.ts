import { Component, OnInit, Input } from '@angular/core';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss']
})
export class CryptoCardComponent implements OnInit {
  public percentage: string = '';
  public currencySign: string;
  public priceOrPercent: string = 'price';

  public crypto = {
    BTC: {
      title: 'Bitcoin',
      img_url: './assets/images/png/bitcoin_shdw.png'
    },
    ETH: {
      title: 'Ethereum',
      img_url: './assets/images/png/ethereum_shdw.png'
    },
    LTC: {
      title: 'Litecoin',
      img_url: './assets/images/png/litecoin_shdw.png'
    }
  };

  percentToggle(event) {
    // console.log(event.target.checked);
    event.target.checked
      ? ((this.percentage = '%'), (this.priceOrPercent = 'percent'))
      : ((this.percentage = ''), (this.priceOrPercent = 'price'));
    // console.log(this.priceOrPercent);
  }

  @Input() cryptoCode: string;
  @Input() marketData: any;

  constructor() {}

  ngOnInit() {}
}
