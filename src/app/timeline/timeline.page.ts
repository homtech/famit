import { Component, OnInit } from '@angular/core';
import { EventModel, EventType} from './timeline.model';
import {Date as TopolaDate} from 'topola';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  events: Array<EventModel> ;
  constructor() { }

  ngOnInit() {
    const events = this.getEvents();
    console.log("Time " + events[0].name);
  }

  public getEvents(): Array<EventModel> {
    const event = new EventModel();
    this.events = new Array<EventModel>();
    event.id = 'event1id';
    event.type = EventType.Born;
    event.name = 'Ngày cưới của A và B';
    event.description = 'Mô tả ngày cưới của A và B';
    event.date = {year: 2018, month: 12, day: 10};
    event.location = {short_address: 'Nghệ An', detail_address: 'Yên Thành, Nghệ An', long: 5749577, lat: 4434434};
    this.events.push(event);
    return this.events;
  }

}
