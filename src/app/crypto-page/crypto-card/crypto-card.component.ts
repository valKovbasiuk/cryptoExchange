import { Component, OnInit, Input } from "@angular/core";
import { CurrencyIndex } from "@angular/common/src/i18n/locale_data";

@Component({
  selector: "app-crypto-card",
  templateUrl: "./crypto-card.component.html",
  styleUrls: ["./crypto-card.component.scss"]
})
export class CryptoCardComponent implements OnInit {
  @Input() currency: string;
  @Input() marketData: any;

  constructor() {}

  ngOnInit() {}
}
