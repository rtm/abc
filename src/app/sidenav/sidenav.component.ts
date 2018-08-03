// app/sidenav/sidenav.component.ts
//
// TS logic for sidenav.

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {Subscription, Observable} from "rxjs";
import {map} from "rxjs/operators";

import * as firebase from "firebase";

import {UserService} from "../../users/user.service";

import {environment} from "../../environments/environment";

@Component({
  selector: "app-sidenav",
  templateUrl: "sidenav.component.html",
  styleUrls: ["sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  // Used to hide the menu item for in-app purchases.
  public user$: Observable<firebase.User>;
  public name$: Observable<string>;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.user$;
    this.name$ = this.user$.pipe(map(user => user.displayName));
  }

  // This will trigger an emission on the AngularFire auth observable,
  // which will take the user to the login page.
  public onSignOut() {
    return this.userService.signOut();
  }

  // This option is mainly for the visitor who is viewing a shared report.
  // It is displayed only when NOT signed-in.
  // We'll probably also give him the option to sign-up from the shared report page.
  public onSignUp() {
    return this.router.navigate(["/users", "sign-in"]);
  }
}
