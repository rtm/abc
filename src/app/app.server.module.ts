import {NgModule} from "@angular/core";
import {ServerModule} from "@angular/platform-server";
import {ModuleMapLoaderModule} from "@nguniversal/module-map-ngfactory-loader";

// Flex-layout requires special considerations to work wiht SSR.
// See https://github.com/angular/flex-layout/blob/master/guides/SSR.md.
import {FlexLayoutServerModule} from "@angular/flex-layout/server";

import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,

    // "Make sure that your import of FlexLayoutServerModule comes after FlexLayoutModule
    // or any modules that import `FlexLayoutmodule`."
    FlexLayoutServerModule,
  ],
  providers: [
    // Add universal-only providers here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
