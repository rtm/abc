// users/home/home.component.ts
//
// JS logic for home component.
// The home page displays some navigation choices, and the user's bookmarks.
// Controller for the `/users/home` route.

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {AngularFirestoreCollection} from "angularfire2/firestore";

import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

import {BookmarkService} from "../../bookmarks/bookmark.service";
import {Bookmark} from "../../bookmarks/bookmark.type";
import {UserService} from "../user.service";

@Component({
  selector: "user-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
})
export class HomeComponent implements OnInit {
  // This user's bookmarks.
  public bookmarks$: Observable<AngularFirestoreCollection<Bookmark>>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly bookmarkService: BookmarkService,
    private readonly userService: UserService
  ) {}

  public ngOnInit() {
    this.bookmarks$ = this.getBookmarks();
  }

  ////////////////////////////////////////////////////////////////
  // USER EVENTS

  // User has chosen to sign out.
  // Sign out of the Firebase auth system.
  // This will trigger emissions on the user observable which will take the user back to the login page.
  public onSignOut() {
    return this.userService.signOut();
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Get this user's bookmarks.
  private getBookmarks() {
    return this.userService.uid$.pipe(map(uid => uid && this.bookmarkService.getByUid(uid)));
  }
}
