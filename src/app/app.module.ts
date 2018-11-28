import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CryptoPageComponent } from "./crypto-page/crypto-page.component";
import { CryptoCardComponent } from "./crypto-page/crypto-card/crypto-card.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptoPageComponent,
    CryptoCardComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
