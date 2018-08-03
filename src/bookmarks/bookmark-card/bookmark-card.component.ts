// bookmarks/bookmark-card/bookmark-card.component.ts
//
// Display a bookmark as a "card" (in the Material Design sense).
// This component knows nothing about the database or CRUD operations.
// It just spits out outputs for various actions, which are handled at a higher level.

import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {Bookmark, BookmarkType} from "../bookmark.type";

@Component({
  selector: "bookmark-card",
  templateUrl: "bookmark-card.component.html",
  styleUrls: ["bookmark-card.component.css"],
})
export class BookmarkCardComponent implements OnChanges {
  @Input() bookmark: Bookmark;

  public type: BookmarkType;

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.type = this.bookmark.type;
  }
}
