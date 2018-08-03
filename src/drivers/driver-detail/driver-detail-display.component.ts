// drivers/driver-detail/driver-detail-display.component.ts
//
// Given a driver's "document", retrieve data and pass along to display component.
// Handle events passed back up if any.

import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

import {Driver} from "../driver.type";
import {MediaCollection} from "../../media/media.type";
import {MediaService} from "../../media/media.service";

@Component({
  selector: "driver-detail-display",
  templateUrl: "driver-detail-display.component.html",
})
export class DriverDetailDisplayComponent implements OnInit, OnChanges {
  @Input() driver: Driver;
  @Input() media: MediaCollection;

  public src$: Observable<string>;

  constructor(private readonly mediaService: MediaService) {}
  ngOnInit() {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.src$ = this.mediaService
      .getById(this.driver.profileMedia)
      .valueChanges()
      .pipe(
        switchMap(media => {
          const downloadUrls = this.mediaService.getDownloadUrls(media.assets);
          return downloadUrls.big || downloadUrls.small;
        })
      );
  }
}
