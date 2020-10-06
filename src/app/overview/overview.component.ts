import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  chartType = 'radar';
  chartLabels: Label[] = ['SourceControl', 'Development', 'Scripting', 'IaC', 'Containers', 'Orchestrators'];

  chartData: ChartDataSets[] = [
    { data: [1,2,3,2,4,5], label: 'DevOps' },
    { data: [3,2,3,1,4,4], label: 'Java' },
  ];

  chartOptions = {
    responsive: true,
    scale: {
      ticks: {
        display: false,
        max: 5,
        min: 0,
        stepSize: 1
      }
    }
  };

  chartColors: Color[] = [
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,255,0,0.2)',
    },
  ];
}
