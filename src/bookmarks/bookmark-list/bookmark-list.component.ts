// bookmarks/bookmark-list/bookmark-list.component.ts
//
// List of bookmarks (as cards).

import {Component, Input} from "@angular/core";
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {Bookmark} from "../bookmark.type";

@Component({
  selector: "bookmark-list",
  template: "TODO: write bookmark list component",
  styleUrls: [],
})
export class BookmarkListComponent {
  @Input() bookmarks: AngularFirestoreCollection<Bookmark>;
}
