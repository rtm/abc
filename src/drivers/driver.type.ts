// drivers/driver.type.ts: Define types for drivers.

import {Observable} from "rxjs";
import {AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

export interface Driver {
  name: string;
  description: string;
  bio: string;

  // Obsolete.
  photos: {
    big: string;
    small: string;
  };

  // ID of "media" object best representing this drier.
  profileMedia: string;
}

export type DriverDocument = AngularFirestoreDocument<Driver>;
export type DriverCollection = AngularFirestoreCollection<Driver>;
export type Driver$ = Observable<Driver>;
