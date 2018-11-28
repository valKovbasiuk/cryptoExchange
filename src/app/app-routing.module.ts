import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CryptoPageComponent } from "./crypto-page/crypto-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "crypto-page", component: CryptoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
