// bookmarks/bookmark.service.ts
//
// Service for bookmarks.
// At the moment, mainly involved with retrieving them.

import {Injectable} from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from "angularfire2/firestore";

import {Bookmark, BookmarkType} from "./bookmark.type";

const BOOKMARK_COLLECTION_NAME = "bookmarks";

@Injectable()
export class BookmarkService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  // Get all bookmarks as a collection.
  getCollection() {
    return this.query();
  }

  // Get a single bookmark based on its ID.
  getById(id: string) {
    return this.getCollection().doc(id) as AngularFirestoreDocument<Bookmark>;
  }

  // Get the bookmarks for a particular user.
  getByUid(uid: string): AngularFirestoreCollection<Bookmark> {
    return this.query(ref => ref.where("uid", "==", uid));
  }

  // Get the bookmarks for a particular type of entity.
  getByType(type: BookmarkType): AngularFirestoreCollection<Bookmark> {
    return this.query(ref => ref.where("type", "==", type));
  }

  // Get the bookmarks for a particular entity type and id.
  getByTypeAndId(type: BookmarkType, id: string): AngularFirestoreCollection<Bookmark> {
    return this.query(ref => ref.where("type", "==", type).where("id", "==", id));
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Return collection of bookmarks queried by filter.
  private query(query?: QueryFn): AngularFirestoreCollection<Bookmark> {
    return this.angularFirestore.collection(BOOKMARK_COLLECTION_NAME, query);
  }
}
