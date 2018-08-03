// media/media.service.ts
//
// Service for media.

import {Injectable} from "@angular/core";
import {AngularFirestore, QueryFn} from "angularfire2/firestore";
import {AngularFireStorage} from "angularfire2/storage";
import {Assets, Media, MediaCollection, MediaDocument} from "./media.type";

const COLLECTION_NAME = "media";

@Injectable()
export class MediaService {
  constructor(
    private readonly angularFirestore: AngularFirestore,
    private readonly angularFireStorage: AngularFireStorage
  ) {}

  // Get all bookmarks as a collection.
  getCollection() {
    return this.query();
  }

  public getByDriver(id: string): MediaCollection {
    return this.query(ref => ref.where(`drivers.${id}`, "==", true));
  }

  public getByEvent(id: string): MediaCollection {
    return this.query(ref => ref.where(`events.${id}`, "==", true));
  }

  // Get a single driver based on his or her ID.
  getById(id: string): MediaDocument {
    return this.getCollection().doc(id);
  }

  // Get the download URLs for some set of assets.
  getDownloadUrls(assets: Assets) {
    return {
      big: this.angularFireStorage.ref(assets.big).getDownloadURL(),
      small: this.angularFireStorage.ref(assets.small).getDownloadURL(),
    };
  }

  ////////////////////////////////////////////////////////////////
  // PRIVATE

  // Return collection of bookmarks queried by filter.
  private query(query?: QueryFn): MediaCollection {
    return this.angularFirestore.collection(COLLECTION_NAME, query);
  }
}
