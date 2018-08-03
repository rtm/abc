// drivers/driver-list/driver-list.component.ts
//
// Business logic for component to show list of drivers.
// This is driven by the route `drivers/list`.

import {Component, OnInit} from "@angular/core";

import {DriverCollection} from "../driver.type";
import {DriverService} from "../driver.service";

@Component({
  selector: "driver-list",
  templateUrl: "driver-list.component.html",
  styleUrls: ["driver-list.component.css"],
})
export class DriverListComponent implements OnInit {
  public drivers: DriverCollection;

  constructor(private readonly driverService: DriverService) {}

  ngOnInit() {
    this.drivers = this.driverService.getCollection();
  }
}
