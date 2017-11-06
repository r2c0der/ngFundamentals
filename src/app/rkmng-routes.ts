
import { Routes } from "@angular/router";
import {EventsListComponent} from "./events/events-list/events-list.component";
import {EventsDetailsComponent} from "./events/events-details/events-details.component";

export const rkmngRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }

]
