// drivers/driver.service.ts
//
// Service for drivers.

import {Injectable} from "@angular/core";

import {AngularFirestore, QueryFn} from "angularfire2/firestore";

import {Driver, DriverCollection, DriverDocument} from "./driver.type";

const COLLECTION_NAME = "drivers";
const MEDIA_COLLECTION_NAME = "media";

@Injectable()
export class DriverService {
  constructor(private readonly angularFirestore: AngularFirestore) {}

  // Get all bookmarks as a collection.
  getCollection() {
    return this.query();
  }

  // Get a single driver based on his or her ID.
  getById(id: string): DriverDocument {
    return this.getCollection().doc(id);
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Return collection of bookmarks queried by filter.
  private query(query?: QueryFn): DriverCollection {
    return this.angularFirestore.collection(COLLECTION_NAME, query);
  }
}
