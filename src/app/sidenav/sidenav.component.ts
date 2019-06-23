// app/sidenav/sidenav.component.ts
//
// TS logic for sidenav.

import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {MatListItem} from "@angular/material/list";

import {
  FocusableOption,
  FocusKeyManager,
  FocusMonitor,
  FocusTrapFactory,
  ListKeyManager,
} from "@angular/cdk/a11y";

import {Subscription, Observable} from "rxjs";
import {map} from "rxjs/operators";

import * as firebase from "firebase/app";

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
  public firstName$: Observable<string>;

  private focusKeyManager: FocusKeyManager<FocusableOption>;

  @ViewChildren("a") viewChildren: QueryList<MatListItem>;

  // @HostListener("window:keyup", ["$event"])
  // keyFunc(event) {
  //   if (event.code !== "Tab") {
  //     this.focusKeyManager.onKeydown(event);
  //     //      this.focusMonitor.focusVia(this.focusKeyManager.activeItem.nativeElement, "keyboard");
  //   } else {
  //     // 'artificially' updates the active element in case the user uses Tab instead of arrows
  //     this.focusKeyManager.onKeydown(event);
  //     this.focusKeyManager.setNextItemActive();
  //   }
  // }

  constructor(
    private readonly focusTrap: FocusTrapFactory,
    private readonly focusMonitor: FocusMonitor,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user$ = this.userService.user$;
    //    this.focusKeyManager = new FocusKeyManager(this.viewChildren).withWrap();
  }

  // This will trigger an emission on the AngularFire auth observable,
  // which will take the user to the login page.
  public onSignOut() {
    return this.userService.signOut();
  }
}
