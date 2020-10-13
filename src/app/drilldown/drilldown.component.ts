import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import DrilldownData from '../../assets/data/drilldown.json';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent {
  capability = DrilldownData.filter(d => d.name == "DevOps").pop();

  chartType = 'bar';

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
