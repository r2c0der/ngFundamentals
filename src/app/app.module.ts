import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { RKMNgFundamentalIndexComponent } from './rkmNg-index.component';
import { RKMNgTopNavComponent } from './ui/rkmng-top-nav/rkmng-top-nav.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

import { EventService } from "./services/event.service";

@NgModule({
  declarations: [
    AppComponent,
    RKMNgFundamentalIndexComponent,
    EventsListComponent,
    RKMNgTopNavComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [RKMNgFundamentalIndexComponent]
})
export class AppModule { }
