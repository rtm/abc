import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";

// MATERIAL DESIGN
// TODO: Consider a separate module only for Angular Material.
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
} from "@angular/material";

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
    BrowserModule,
    BrowserAnimationsModule,

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
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
