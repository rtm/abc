// media/media-collection/media-collection.component.ts
//
// Logic for template to display an AngularFirestore collection of media items.
// The way this is currently structured, the individual media items are passed
// directly to the media-card component for display.
// At that point, we have lost their ID and other metadata, and could not
// perform CRUD actions on them even if we wanted to.

import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Media, MediaCollection} from "../media.type";

@Component({
  selector: "media-collection",
  template: `<media-card *ngFor="let media of media$ | async" [media]="media"></media-card>`,
})
export class MediaCollectionComponent implements OnInit {
  @Input("media") mediaCollection: MediaCollection;

  public media$: Observable<Media[]>;

  ngOnInit() {
    this.media$ = this.mediaCollection.valueChanges();
  }
}
