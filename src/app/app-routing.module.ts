import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "../users/home/home.component";
import {SignInComponent} from "../users/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "users",
    children: [
      {path: "sign-in", component: SignInComponent},
      {path: "home", component: HomeComponent},
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
