import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { RKMNgFundamentalIndexComponent } from './rkmNg-index.component';
import { RKMNgTopNavComponent } from './ui/rkmng-top-nav/rkmng-top-nav.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

import { EventService } from "./services/event.service";
import { ToastrService} from "./services/toastr.service";
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { rkmngRoutes } from "./rkmng-routes";

@NgModule({
  declarations: [
    AppComponent,
    RKMNgFundamentalIndexComponent,
    EventsListComponent,
    RKMNgTopNavComponent,
    EventThumbnailComponent,
    EventsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rkmngRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [RKMNgFundamentalIndexComponent]
})
export class AppModule { }
