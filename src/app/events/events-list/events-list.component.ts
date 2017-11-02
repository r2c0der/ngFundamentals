import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import { ToastrService } from "../../services/toastr.service";

@Component({
  selector: 'rkmng-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
   events:any[];
  constructor(
    private _eventService: EventService,
    private  _toastrService: ToastrService) {


  }

  /**
   * Called when component is loaded
   */
  ngOnInit() {
    this.events = this._eventService.getEvents();
  }

  handleThumbnailClick(eventName){
    this._toastrService.success(eventName);


    }

}

