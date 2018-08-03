// drivers/driver-card/driver-card-display.component.ts
//
// Logic for displaying a driver as a card.

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {AngularFireStorage} from "angularfire2/storage";
import {Observable} from "rxjs";

import {Driver} from "../driver.type";

@Component({
  selector: "driver-card-display",
  templateUrl: "driver-card-display.component.html",
  styleUrls: ["driver-card-display.component.css"],
})
export class DriverCardDisplayComponent implements OnChanges {
  @Input() driver: Driver;

  @Output() select = new EventEmitter();
  @Output() bookmark = new EventEmitter();

  public src: Observable<string>;
  public shortBio: string;

  constructor(private readonly angularFireStorage: AngularFireStorage) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.src = this.angularFireStorage.ref(this.driver.photos.small).getDownloadURL();
    this.shortBio = this.driver.bio.slice(0, 100).replace(/\s\S+$/, "");
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS
  public onSelect() {
    this.select.emit();
  }
}
