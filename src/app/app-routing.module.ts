import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {SignInComponent} from "../users/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "user",
    children: [{path: "sign-in", component: SignInComponent}],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
