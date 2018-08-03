import {Component, ViewChild} from "@angular/core";
import {Router} from "@angular/router";

import {MatSidenav} from "@angular/material/sidenav";

import {filter} from "rxjs/operators";

import {UserService} from "../users/user.service";
import {UiService} from "./ui.service";
import {UpdateService} from "./update.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title = "ABC Racing Company";

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  public get isMobile() {
    return this.uiService.isMobile;
  }

  constructor(
    router: Router,
    userService: UserService,
    private readonly uiService: UiService,
    readonly updateService: UpdateService
  ) {
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

  public getScreenName(outlet) {
    return outlet.activatedRouteData["screenName"] || "home";
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS

  // Menu icon was clicked.
  public onMenu() {
    this.uiService.openSidenav(true);
  }

  public onBackdropClick() {
    return this.uiService.maybeClose();
  }

  public onSidenavClick() {
    return this.uiService.maybeClose();
  }
}
