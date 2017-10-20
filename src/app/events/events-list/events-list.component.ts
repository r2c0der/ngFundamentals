import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkmng-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '10/22/2037',
    time: '21:00',
    price: 599.99,
    imageUrl: '/app/assets/images/anagularconnect-shied.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

}
