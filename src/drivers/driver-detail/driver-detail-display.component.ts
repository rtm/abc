// drivers/driver-detail/driver-detail-display.component.ts
//
// Given a driver's "document", retrieve data and pass along to display component.
// Handle events passed back up if any.

import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Driver} from "../driver.type";
import {MediaCollection} from "../../media/media.type";

@Component({
  selector: "driver-detail-display",
  templateUrl: "driver-detail-display.component.html",
})
export class DriverDetailDisplayComponent implements OnInit {
  @Input() driver: Driver;
  @Input() media: MediaCollection;

  ngOnInit() {}
}
