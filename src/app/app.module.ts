import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import {RKMNgFundamentalIndexComponent} from './rkmNg-index.component';

@NgModule({
  declarations: [
    AppComponent,
    RKMNgFundamentalIndexComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RKMNgFundamentalIndexComponent]
})
export class AppModule { }
