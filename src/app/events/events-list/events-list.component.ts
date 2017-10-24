import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkmng-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
   events:any[] = EVENTS;
  constructor() { }

  ngOnInit() {
  }


}

