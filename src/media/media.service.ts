import {Injectable} from "@angular/core";

import {DriverDocument} from "../drivers/driver.type";
import {MediaCollection} from "./media.type";

const COLLECTION_NAME = "media";

@Injectable()
export class MediaService {
  static getByDriver(driver: DriverDocument): MediaCollection {
    return driver.collection(COLLECTION_NAME);
  }
}
