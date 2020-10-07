import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import OverviewData from '../../assets/data/overview.json';

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

  chartData: ChartDataSets[] = OverviewData.map((d) => ({data: d.data, label: d.capability }));
  
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
