import {BrowserModule} from "@angular/platform-browser";
//import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ServiceWorkerModule} from "@angular/service-worker";

// MATERIAL DESIGN
// TODO: Consider a separate module only for Angular Material.
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";

import {FlexLayoutModule} from "@angular/flex-layout";

// Import Firebase (AngularFire-related modules).
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireStorageModule} from "angularfire2/storage";
import {AngularFireAuthModule} from "angularfire2/auth";

import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";
import {AppRoutingModule} from ".//app-routing.module";

// COMPONENTS
import {BookmarkCardComponent} from "../bookmarks/bookmark-card/bookmark-card.component";
import {BookmarkListComponent} from "../bookmarks/bookmark-list/bookmark-list.component";

import {DriverCardDisplayComponent} from "../drivers/driver-card/driver-card-display.component";
import {DriverCardDocumentComponent} from "../drivers/driver-card/driver-card-document.component";
import {DriverCardCollectionComponent} from "../drivers/driver-card/driver-card-collection.component";

import {DriverDetailDisplayComponent} from "../drivers/driver-detail/driver-detail-display.component";
import {DriverDetailDocumentComponent} from "../drivers/driver-detail/driver-detail-document.component";
import {DriverDetailScreenComponent} from "../drivers/driver-detail/driver-detail-screen.component";

import {DriverListComponent} from "../drivers/driver-list/driver-list.component";

import {EventListComponent} from "../events/event-list/event-list.component";

import {HelpComponent} from "../help/help.component";
import {HomeComponent} from "../users/home/home.component";

import {MediaCardComponent} from "../media/media-card/media-card.component";
import {MediaCollectionComponent} from "../media/media-collection/media-collection.component";

import {SignInComponent} from "../users/sign-in/sign-in.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

// PROVIDERS
import {BookmarkService} from "../bookmarks/bookmark.service";
import {DriverService} from "../drivers/driver.service";
import {EventService} from "../events/event.service";
import {UiService} from "./ui.service";
import {UserService} from "../users/user.service";

@NgModule({
  declarations: [
    AppComponent,

    BookmarkCardComponent,
    BookmarkListComponent,

    DriverCardDisplayComponent,
    DriverCardDocumentComponent,
    DriverCardCollectionComponent,

    DriverDetailScreenComponent,
    DriverDetailDocumentComponent,
    DriverDetailDisplayComponent,
    DriverListComponent,

    EventListComponent,
    HelpComponent,

    HomeComponent,
    MediaCardComponent,
    MediaCollectionComponent,
    SidenavComponent,
    SignInComponent,
  ],
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
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,

    ServiceWorkerModule.register("/ngsw-worker.js", {enabled: environment.production}),

    AppRoutingModule,
  ],
  providers: [BookmarkService, DriverService, EventService, UiService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
