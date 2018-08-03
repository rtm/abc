// drivers/driver-detail/driver-detail-document.component.ts
//
// Given a driver's "document", retrieve data and pass along to display component.
// Handle events passed back up if any.

import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {Driver, Driver$, DriverDocument} from "../driver.type";
import {DriverService} from "../driver.service";

import {MediaCollection} from "../../media/media.type";
import {MediaService} from "../../media/media.service";

@Component({
  selector: "driver-detail-document",
  template: `
<ng-container *ngIf="driver$ | async as driver">
  <driver-detail-display [driver]="driver" [media]="media"></driver-detail-display>
</ng-container>`,
})
export class DriverDetailDocumentComponent implements OnInit {
  @Input("driver") driverDocument: DriverDocument;
  @Input() media: MediaCollection;

  public driver$: Driver$;

  constructor(private readonly driverService: DriverService) {}

  ngOnInit() {
    this.driver$ = this.driverDocument.valueChanges();
    this.media = MediaService.getByDriver(this.driverDocument);
  }
}
