import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import DrilldownData from '../../assets/data/drilldown.json';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent {
  chartType = 'bar';

  responses: number = DrilldownData.filter((d) => d.capability == "DevOps")[0].responses;
  
  categories: string[] = DrilldownData.filter((d) => d.capability == "DevOps")[0]
    .categories.map(c => c.category);

  chartLabels: Label[][] = DrilldownData.filter((d) => d.capability == "DevOps")[0]
    .categories.map(c => c.labels);

  chartData: ChartDataSets[][] = DrilldownData.filter((d) => d.capability == "DevOps")[0]
    .categories.map(c => c.dataset);

  chartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{
        stacked: true,
        gridLines: { display: false }
      }], 
      yAxes: [{ stacked: true, type: 'linear' }]
    }
  };
}
