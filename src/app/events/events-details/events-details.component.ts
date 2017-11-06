import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";

@Component({
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {

  event: any;
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.event = this._eventService.getEventById(1);
  }

  getStartTimeStyle(){
    if(this.event && this.event.time === '8:00 am'){
      return {color:'#cc0066'};
    }
    if(this.event && this.event.time === '1:00 pm'){
      return {color:'limegreen'}
    }
  }

  getOnlineStyle(){

    return {color: '#3300ff', fontWeight: '600'};
  }


}
