import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  selector: 'rkmng-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
   events:any[];
  constructor(private eventService: EventService) {


  }

  /**
   * Called when component is loaded
   */
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick($event){

    }

}

