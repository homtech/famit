import { ShellModel } from '../../shell/data-store';
import {
  JsonGedcomData,
  IndiInfo
} from 'topola';
import { ChartType } from './chart.interfaces';

export class ChartProps extends ShellModel {
  data: JsonGedcomData;
  selection: IndiInfo;
  chartType: ChartType;
  svg: any;
  onSelection: (indiInfo: IndiInfo) => void;
  constructor() {
    super();
  }
  public setData(data: JsonGedcomData) {
    this.data = data;
  } 
}