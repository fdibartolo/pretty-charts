import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent {

  chartType = 'bar';
  chartLabels: Label[ ] = [
    'Containers',
    'Development',
    'Infra as Code',
    'Orchestrators',
    'Scripting',
    'Source Control'
  ];

  chartData: ChartDataSets[] = [
    { data: [6, 9, 8, 1, 5, 3], label: 'Familiarizado' },
    { data: [5, 5, 1, 8, 6, 4], label: 'Usado' },
    { data: [2, 4, 4, 9, 6, 5], label: 'Experto' }
  ];

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
