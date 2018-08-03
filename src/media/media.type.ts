// media/media.type.ts: Type definitions for "media".

import {Observable} from "rxjs";
import {AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

export interface Assets {
  big: string;
  small: string;
}

export interface Media {
  description: string;
  mimeType: string;

  assets: Assets;

  date: number;

  drivers: {[id: string]: boolean};
  events: {[id: string]: boolean};
}

export type MediaCollection = AngularFirestoreCollection<Media>;
export type MediaDocument = AngularFirestoreDocument<Media>;
export type Media$ = Observable<Media>;
