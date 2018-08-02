import {BrowserModule} from "@angular/platform-browser";
//import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ServiceWorkerModule} from "@angular/service-worker";

// MATERIAL DESIGN
// TODO: Consider a separate module only for Angular Material.
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";

import {FlexLayoutModule} from "@angular/flex-layout";

// Import Firebase (AngularFire-related modules).
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireStorageModule} from "angularfire2/storage";
import {AngularFireAuthModule} from "angularfire2/auth";

import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    //    BrowserModule,
    // If using SSR:
    BrowserModule.withServerTransition({appId: "rtm-abc-racing"}),

    // Replace this if animations are desired.
    // You will also have to uncomment hammerjs in main.ts.
    //    BrowserAnimationsModule,
    NoopAnimationsModule,

    // ANGULARFIRE
    AngularFireModule.initializeApp(environment.firebase),

    // Turn on local persistence for Firestore.
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features

    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features],

    FlexLayoutModule,

    // MATERIAL DESIGN
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
