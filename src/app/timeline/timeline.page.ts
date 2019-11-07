import { Component, OnInit } from '@angular/core';
import { EventModel, EventType} from './timeline.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {FirebaseService} from '../firebase/firebase-integration.service';
import {JsonGedcomData} from 'topola';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  private json: JsonGedcomData;
  events: Array<EventModel> ;
  constructor(
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const events = this.getEvents();
    console.log("Time " + events[0].name + " " + this.json.fams[0].id);
  }

  public getEvents(): Array<EventModel> {
    this.events = new Array<EventModel>();
    this.getData();
    this.json.fams.forEach(element => {
      if(element.marriage != null) {
        const event = new EventModel();
        event.type = EventType.Marriage;
        event.date = element.marriage.date;
        event.place = element.marriage.place;
        event.name = element.husb + ' và ' + element.wife + ' cưới nhau' ;
        event.description = element.husb + ' và ' + element.wife + ' cưới nhau' ;
        this.events.push(event);
      }
    });
    this.json.indis.forEach(element => {
      if(element.birth != null) {
        const event = new EventModel();
        event.type = EventType.Birth;
        event.date = element.birth.date;
        event.place = element.birth.place;
        event.name = element.lastName + ' ' + element.firstName + ' ra đời' ;
        event.description = element.lastName + ' ' + element.firstName + ' ra đời' ;
        this.events.push(event);
      }
      if(element.death != null) {
        const event = new EventModel();
        event.type = EventType.Death;
        event.date = element.death.date;
        event.place = element.death.place;
        event.name = element.lastName + ' ' + element.firstName + ' mất' ;
        event.description = element.lastName + ' ' + element.firstName + ' mất' ;
        this.events.push(event);
      }
    });
    return this.events;
  }

  getData(): any{
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.json = data;
        return data as JsonGedcomData;
      }
      else
        return null;
     })
  }
}
