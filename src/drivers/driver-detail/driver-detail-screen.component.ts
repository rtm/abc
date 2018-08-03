// drivers/driver-detail/driver-detail-screen.component.ts
//
// Handle route for driver details.
// Retreive ID from URL, get relevant document, and pass along.

import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

import {Driver, DriverDocument} from "../driver.type";
import {DriverService} from "../driver.service";

@Component({
  selector: "driver-detail-screen",
  template: `
<ng-container *ngIf="driver$ | async as driver">
  <driver-detail-document [driver]="driver"></driver-detail-document>
</ng-container>
`,
})
export class DriverDetailScreenComponent implements OnInit {
  public driver$: Observable<DriverDocument>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly driverService: DriverService
  ) {}

  ngOnInit() {
    this.driver$ = this.activatedRoute.paramMap.pipe(
      map(params => this.driverService.getById(params.get("id")))
    );
  }
}
