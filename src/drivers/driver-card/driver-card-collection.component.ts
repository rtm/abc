// drivers/driver-card/driver-card-collection.component.ts
//
// Component to display a collecdtion of drivers as cardsd.
// This is used on the driver list page.
// Obtain the stream of arrays of changes to drivers,
// derive the relevant documents, and call the component to display a driver card
// based on its document.

import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {Driver, DriverCollection, DriverDocument} from "../driver.type";
import {DriverService} from "../driver.service";

@Component({
  selector: "driver-card-collection",
  template: `
    <ng-container *ngIf="drivers$ | async as drivers">
      <div *ngIf="!drivers.length">No drivers to show.</div>
      <ng-container *ngFor="let driver of drivers">
        <driver-card-document [driver]="driver"></driver-card-document>
      </ng-container>
    </ng-container>`,
})
export class DriverCardCollectionComponent implements OnInit {
  @Input("drivers") driverCollection: DriverCollection;

  public drivers$: Observable<DriverDocument[]>;
  public numDrivers$: Observable<number>;

  constructor(
    private readonly angularFirestore: AngularFirestore,
    private readonly driverService: DriverService
  ) {}

  ngOnInit() {
    this.drivers$ = this.driverCollection
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(action => this.driverService.getById(action.payload.doc.id)))
      );

    this.numDrivers$ = this.drivers$.pipe(map(drivers => drivers.length));
  }
}
