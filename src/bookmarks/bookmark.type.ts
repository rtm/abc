// bookmsarks/type.ts
//
// Type definition for bookmarks.

export type BookmarkType = "racer" | "event";

export interface Bookmark {
  uid: string;

  // The entity being bookmarked, identified by its type and id.
  type: BookmarkType;
  id: string;
}
