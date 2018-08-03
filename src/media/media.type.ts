// media/media.type.ts: Type definitions for "media".
//
// These are generally found in a collection named "media" under drivers or events.

import {AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";

export interface Media {
  name: string;
  description: string;
  mimeType: string;
  url: string;
  date: number;
}

export type MediaCollection = AngularFirestoreCollection<Media>;
export type MediaDocument = AngularFirestoreDocument<Media>;
