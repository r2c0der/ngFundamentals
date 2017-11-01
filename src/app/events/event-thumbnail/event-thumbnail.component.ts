import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rkmng-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:any

  constructor() { }

  ngOnInit() {
  }

  getStartTimeStyle(){
      if(this.event && this.event.time === '8:00 am'){
        return {color:'#cc0066'}
      }
    if(this.event && this.event.time === '1:00 pm'){
      return {color:'limegreen'}
    }
  }

}
