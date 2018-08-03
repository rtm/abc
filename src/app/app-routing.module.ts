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
      {path: "sign-in", component: SignInComponent},
      {path: "home", component: HomeComponent},
    ],
  },
  {
    path: "events",
    children: [{path: "list", component: EventListComponent}],
  },
  {
    path: "drivers",
    children: [
      {path: "list", component: DriverListComponent},
      {path: "detail/:id", component: DriverDetailScreenComponent},
    ],
  },
  {
    path: "help",
    component: HelpComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
