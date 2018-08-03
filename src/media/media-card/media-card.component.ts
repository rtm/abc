// media/media-card/media-card.component.ts
//
// Logic for displaying "media" as a card.

import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Observable} from "rxjs";

import {Media} from "../media.type";
import {MediaService} from "../media.service";

@Component({
  selector: "media-card",
  templateUrl: "media-card.component.html",
  styleUrls: ["media-card.component.css"],
})
export class MediaCardComponent implements OnChanges {
  @Input() media: Media;

  @Output() click = new EventEmitter();

  public src$: Observable<string>;

  constructor(private readonly mediaService: MediaService) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    const downloadUrls = this.mediaService.getDownloadUrls(this.media.assets);

    this.src$ = downloadUrls.small || downloadUrls.big;
  }

  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS
  public onClick() {
    this.click.emit();
  }
}
