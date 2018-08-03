// app/update.service.ts
//
// Watch for Service Worker update and alert user.
// See https://alligator.io/angular/service-worker-updates/.

import {Injectable} from "@angular/core";

import {MatSnackBar} from "@angular/material/snack-bar";
import {SwUpdate} from "@angular/service-worker";

@Injectable()
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private matSnackBar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      const snack = this.matSnackBar.open("Update Available", "Reload", {duration: 3000});

      snack.onAction().subscribe(() => {
        window.location.reload();
      });
    });

    if (!this.swUpdate.isEnabled) console.log("Service worker is not enabled!");
  }
}
