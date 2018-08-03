import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "../users/home/home.component";
import {SignInComponent} from "../users/sign-in/sign-in.component";
import {DriverListComponent} from "../drivers/driver-list/driver-list.component";
import {DriverDetailScreenComponent} from "../drivers/driver-detail/driver-detail-screen.component";
import {EventListComponent} from "../events/event-list/event-list.component";
import {HelpComponent} from "../help/help.component";

const routes: Routes = [
  {
    path: "users",
    children: [
      {path: "sign-in", component: SignInComponent, data: {screenName: "sign in"}},
      {path: "home", component: HomeComponent, data: {screenName: "home"}},
    ],
  },
  {
    path: "events",
    children: [{path: "list", component: EventListComponent, data: {screenName: "event list"}}],
  },
  {
    path: "drivers",
    children: [
      {path: "list", component: DriverListComponent, data: {screenName: "driver list"}},
      {
        path: "detail/:id",
        component: DriverDetailScreenComponent,
        data: {screenName: "driver detail"},
      },
    ],
  },
  {
    path: "help",
    component: HelpComponent,
    data: {screenName: "help"},
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
