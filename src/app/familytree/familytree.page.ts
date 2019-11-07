import {Component, OnInit, OnChanges, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import { ModalController, LoadingController } from '@ionic/angular';
import { FirebaseService } from '../firebase/firebase-integration.service'
import {ChartService} from '../utils/chart/chart.service';
import {ChartType } from '../utils/chart/chart.interfaces';
import {ChartProps} from '../utils/chart/chart.model';
import {getSelection, loadFromUrl} from '../utils/chart/load_data';
import {JsonGedcomData, IndiInfo} from 'topola';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-familytree',
  templateUrl: './familytree.page.html',
  styleUrls: ['./familytree.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FamilytreePage implements OnInit, OnChanges {
  private url: string;
  private modalController: ModalController;
  chartData: JsonGedcomData;  
 //   private data: TopolaData;
  constructor(
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute
   // private chartType: ChartType
  ) { }

  ngOnInit() {
    this.renderChart();
    //this.createFamilyTree();
  }

  ngOnChanges() {
    this.renderChart();
  }
  //--------
  private async renderMainArea() {
    this.getData();
    if(!this.chartData) {
      this.url='https://firebasestorage.googleapis.com/v0/b/famit-vn.appspot.com/o/671101611_1_DF_5acbldctkyf75q0a.ged?alt=media&token=975aa85d-b9ee-4aa8-ae7e-558f00b73376';
      const data =  await loadFromUrl(this.url, true);
      /* console.log("data: " + data.chartData.indis[0].firstName);
      console.log("chartNode: " + (d3.select('#chart').node() as HTMLElement).textContent); */
      this.chartData = data.chartData;
    }
    
    const selection = getSelection(this.chartData, undefined, undefined);
    const chartP = new ChartProps();
    chartP.data = this.chartData;
    chartP.selection = selection;
    chartP.chartType = ChartType.Hourglass;
    const chartService = new ChartService(chartP);
    chartService.renderChart();
    this.firebaseService.createFamilyTree(this.chartData);
  };
  private renderChart() {
    this.renderMainArea();
  }

  getData(): any{
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.chartData = data;
        return data as JsonGedcomData;
      }
      else
        return null;
     })
  }
}
