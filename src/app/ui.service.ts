// app/sidenav.service.ts

// The sidenav service, for managing the sidenav.

import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {Subject} from "rxjs";

@Injectable()
export class UiService {
  // Expose an observable to drive opening of the sidenav.
  // This is listened to by the app component, and set by the hamburger component.
  public openSidenav$ = new Subject<boolean>();

  private sidenavOpened = true;
  private isMobile = false;
  private activeMediaQuery = "";

  constructor(private readonly observableMedia: ObservableMedia, private readonly router: Router) {
    this.observeNavigation();
    this.observeMedia();
  }

  // This is called by the hamburger component,
  // and listened to by the app component.
  public openSidenav(bool = true) {
    this.openSidenav$.next(bool);
  }

  public setSidenavOpened(b: boolean) {
    this.sidenavOpened = b;
  }

  // Close the sidenav unless on mobile (such as when clicked on).
  public maybeClose() {
    if (this.isMobile) this.openSidenav(false);
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Watch for media change event, to close sidebar if necessary.
  private observeMedia() {
    this.observableMedia.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if (change.mqAlias === "xs") {
        this.openSidenav(false);
        this.isMobile = true;
      } else {
        this.openSidenav(true);
        this.isMobile = false;
      }
    });
  }

  private observeNavigation() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd && this.isMobile) this.openSidenav(false);
    });
  }
}
