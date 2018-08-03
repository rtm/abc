// drivers/driver-card/driver-card-display.component.ts
//
// Logic for displaying a driver as a card.

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

import {Driver} from "../driver.type";
import {MediaService} from "../../media/media.service";

@Component({
  selector: "driver-card-display",
  templateUrl: "driver-card-display.component.html",
  styleUrls: ["driver-card-display.component.css"],
})
export class DriverCardDisplayComponent implements OnChanges {
  @Input() driver: Driver;

  @Output() select = new EventEmitter();
  @Output() bookmark = new EventEmitter();

  public src$: Observable<string>;
  public shortBio: string;

  constructor(private readonly mediaService: MediaService) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.src$ = this.mediaService
      .getById(this.driver.profileMedia)
      .valueChanges()
      .pipe(
        switchMap(media => {
          const downloadUrls = this.mediaService.getDownloadUrls(media.assets);
          return downloadUrls.small || downloadUrls.big;
        })
      );
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS
  public onSelect() {
    this.select.emit();
  }
}
