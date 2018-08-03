// drivers/driver-card/driver-card-document.component.ts
//
// Component to display a driver's card based on the document.
// Obtain the stream of changes  and pass it to the raw display componenet.

import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {Driver, Driver$, DriverCollection, DriverDocument} from "../driver.type";

@Component({
  selector: "driver-card-document",
  template: `
    <ng-container *ngIf="driver$ | async as driver">
    <driver-card-display [driver]="driver" (select)="onSelect()"></driver-card-display>
    </ng-container>
    `,
})
export class DriverCardDocumentComponent implements OnInit {
  @Input() driver: DriverDocument;

  public driver$: Driver$;

  constructor(
    private readonly angularFirestore: AngularFirestore,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.driver$ = this.driver.valueChanges();
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS

  // User has "selected" a driver.
  public onSelect() {
    this.router.navigate(["/drivers", "detail", this.driver.ref.id]);
  }
}
