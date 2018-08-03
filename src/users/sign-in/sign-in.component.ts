// users/sign-in.component.ts
//
// JS logic for sign-in component.
// Controller by the `/users/sign-in` route.
// Pass a redirect URL as query paramter if you so desire.

import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {UserService} from "../user.service";

@Component({
  selector: "user-sign-in",
  templateUrl: "sign-in.component.html",
  styleUrls: ["sign-in.component.css"],
})
export class SignInComponent {
  private redirectUrl: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  public ngOnInit() {
    const redirectUrl = this.activatedRoute.snapshot.queryParams["redirectUrl"];
    const defaultRedirectUrl = "/user/home";

    this.redirectUrl = defaultRedirectUrl || redirectUrl;
  }

  // When ready, ask FirebaseUI to put up its user interface.
  public async ngAfterViewInit() {
    try {
      this.userService.firebaseUi("#firebase-ui", this.redirectUrl);
    } catch (e) {
      console.error("failed to initialize firebaseUI", e);
    }
  }
}
