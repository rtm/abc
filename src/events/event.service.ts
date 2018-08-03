// events/event.service.ts
//
// Service for events.

import {Injectable} from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from "angularfire2/firestore";

import {Event} from "./event.type";

export type EventDocument = AngularFirestoreDocument<Event>;
export type EventCollection = AngularFirestoreCollection<Event>;

const COLLECTION_NAME = "events";

@Injectable()
export class EventService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  // Get all bookmarks as a collection.
  public getCollection() {
    return this.query();
  }

  // Get a single event based on his or her ID.
  public getById(id: string): EventDocument {
    return this.getCollection().doc(id);
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Return collection of events, optionally queried by filter.
  private query(query?: QueryFn): EventCollection {
    return this.angularFirestore.collection(COLLECTION_NAME, query);
  }
}
