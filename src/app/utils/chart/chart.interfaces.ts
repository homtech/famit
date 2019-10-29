import {
  JsonGedcomData,
  IndiInfo
} from 'topola';
import {TopolaData, getSoftware} from './gedcom_util';
export enum ChartType {
  Hourglass,
  Relatives,
}
export interface State {
  /** Loaded data. */
  data?: TopolaData;
  /** Selected individual. */
  selection?: IndiInfo;
  /** Hash of the GEDCOM contents. */
  hash?: string;
  /** Error to display. */
  error?: string;
  /** True if data is currently being loaded. */
  loading: boolean;
  /** URL of the data that is loaded or is being loaded. */
  url?: string;
  /** Whether the side panel is shown. */
  showSidePanel?: boolean;
  /** Whether the app is in embedded mode, i.e. embedded in an iframe. */
  embedded: boolean;
  /** Whether the app is in standalone mode, i.e. showing 'open file' menus. */
  standalone: boolean;
  /** Type of displayed chart. */
  chartType: ChartType;
}

/* export class ChartProps {
  data: JsonGedcomData;
  selection: IndiInfo;
  chartType: ChartType;
  onSelection: (indiInfo: IndiInfo) => void;
} */
