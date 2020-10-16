import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions } from 'chart.js';
import DrilldownData from '../../assets/data/drilldown.json';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent {
  capability: any;

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.capability = DrilldownData.filter(d => d.name == params['capability']).pop();
    });
  }
}
