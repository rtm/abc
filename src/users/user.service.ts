// users/user.service.ts
//
// Handle user management, logging in, logging out.

import {Injectable} from "@angular/core";

import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import {AngularFireAuth} from "angularfire2/auth";

////////////////////////////////////////////////////////////////
// SERVICE
@Injectable()
export class UserService {
  // A stream giving the Firebase logged-in user.
  public user$ = this.angularFireAuth.authState;

  // A stream giving the user ID of the logged-in user.
  public uid$ = this.user$.pipe(map(afUser => afUser && afUser.uid));

  // The authUI needed to put up the firebase auth UI.
  public authUI = new firebaseui.auth.AuthUI(firebase.auth());

  constructor(private readonly angularFireAuth: AngularFireAuth) {}

  // Convenience room to get current user, in the Angular auth sense.
  public get currentUser() {
    return this.angularFireAuth.auth.currentUser;
  }

  // Sign out. This will trigger an emission on the authState observable.
  public signOut() {
    this.authUI.disableAutoSignIn();
    return this.angularFireAuth.auth.signOut();
  }

  // Firebase UI for authentication.
  // This is invoked from the sign-in page.
  // The sign-in page knows where we want to redirect after signing in.
  public firebaseUi(selector: string, signInSuccessUrl?: string) {
    const uiConfig: firebaseui.auth.Config = {
      signInSuccessUrl,

      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],

      // Suppress ToS display, since it does not work well with Cordova.
      tosUrl: "",

      callbacks: {
        signInSuccessWithAuthResult(authResult: any, redirectUrl: any) {
          return false;
        },
        async signInFailure(error: firebaseui.auth.AuthUIError) {
          // Some unrecoverable error occurred during sign-in.
          // Return a promise when error handling is completed and FirebaseUI
          // will reset, clearing any UI. This commonly occurs for error code
          // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
          // occurs. Check below for more details on this.
          console.error("Sign in failure", error);
        },
        uiShown() {},
      },

      // This turns off the acocunt chooser. See https://github.com/firebase/firebaseui-web/issues/42.
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    };

    this.authUI.start(selector, uiConfig);
  }

  // Not currently used.
  public isPendingRedirect() {
    return this.authUI.isPendingRedirect();
  }
}
