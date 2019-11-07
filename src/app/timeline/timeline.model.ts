import { ShellModel } from '../shell/data-store';
import {Date as TopolaDate} from 'topola';
import { TopolaData } from '../utils/chart/gedcom_util';

export enum EventType {
  Marriage,
  Birth,
  Death
}
export class EventModel extends ShellModel {
  type: EventType;
  id: string;
  name: string;
  date?: TopolaDate;
  description: string;
  place?: string;
  images: Array<{filename: string, url: string}> = [
    {
      filename: '',
      url: ''
    },
    {
      filename: '',
      url: ''
    }
  ];

  constructor() {
    super();
  }
}
