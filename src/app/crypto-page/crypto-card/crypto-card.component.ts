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

  percentToggle(event) {
    // console.log(event.target.checked);
    event.target.checked
      ? ((this.percentage = '%'), (this.priceOrPercent = 'percent'))
      : ((this.percentage = ''), (this.priceOrPercent = 'price'));
    // console.log(this.priceOrPercent);
  }

  @Input() currency: string;
  @Input() marketData: any;

  constructor() {}

  ngOnInit() {}
}
