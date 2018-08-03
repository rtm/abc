// media/media-card/media-card.component.ts
//
// Logic for displaying "media" as a card.

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {AngularFireStorage} from "angularfire2/storage";
import {Observable} from "rxjs";

import {Media} from "../media.type";

@Component({
  selector: "media-card",
  templateUrl: "media-card.component.html",
  styleUrls: ["media-card.component.css"],
})
export class MediaCardComponent implements OnChanges {
  @Input() media: Media;

  @Output() click = new EventEmitter();

  public src: Observable<string>;
  public shortDescription: string;

  constructor(private readonly angularFireStorage: AngularFireStorage) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.src = this.angularFireStorage.ref("foobar").getDownloadURL();
    this.shortDescription = this.media.description.slice(0, 100).replace(/\s\S+$/, "");
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS
  public onClick() {
    this.click.emit();
  }
}
