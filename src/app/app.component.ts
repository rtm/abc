import {Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";

import {MatSidenav} from "@angular/material/sidenav";

import {filter} from "rxjs/operators";

import {UserService} from "../users/user.service";
import {UiService} from "./ui.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title = "ABC Racing Company";

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(router: Router, userService: UserService, private uiService: UiService) {
    // Should this be in the constructor or in ngOnInit?
    userService.user$.subscribe(user => router.navigate(["/users", user ? "home" : "sign-in"]));
  }

  ngOnInit() {
    this.uiService.openSidenav$.subscribe(open => {
      if (open) this.sidenav.open();
      else this.sidenav.close();
    });
  }

  public onSidenavOpenedChange(b: boolean) {
    this.uiService.setSidenavOpened(b);
  }
}
