// drivers/driver.type.ts: Define types for drivers.

import {Observable} from "rxjs";
import {AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

export interface Driver {
  name: string;
  bio: string;
  photos: {
    big: string;
    small: string;
  };
}

export type DriverDocument = AngularFirestoreDocument<Driver>;
export type DriverCollection = AngularFirestoreCollection<Driver>;
export type Driver$ = Observable<Driver>;
