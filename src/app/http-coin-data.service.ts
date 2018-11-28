import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { _getViewData } from "@angular/core/src/render3/instructions";

// const apiUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";
let cryptoCode: string;
let currencyCode: string;
@Injectable({
  providedIn: "root"
})
export class HttpCoinDataService {
  constructor(private http: HttpClient) {}
  getData(cryptoCode = "BTC", currencyCode = "USD") {
    return this.http.get(
      "https://apiv2.bitcoinaverage.com/indices/global/ticker/" +
        cryptoCode +
        currencyCode
    );
  }
}
