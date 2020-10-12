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
  chartLabels: Label[][] = [[
    'Docker',
    'Openshift',
    'Kubernetes',
    'AWS',
    'GCP',
    'Azure'
  ],[
    'Ansible',
    'CloudFormation',
    'Chef',
    'Terraform',
    'Puppet'
  ]
  ];

  chartData: ChartDataSets[][] = [[
    { data: [1, 2, 5, 8, 4, 2], label: 'Desconozco' },
    { data: [6, 9, 8, 1, 5, 5], label: 'Familiarizado' },
    { data: [5, 5, 1, 8, 6, 3], label: 'Usado' },
    { data: [2, 4, 4, 9, 7, 7], label: 'Experto' }
  ],[
    { data: [2, 4, 4, 9, 7], label: 'Desconozco' },
    { data: [1, 2, 5, 8, 4], label: 'Familiarizado' },
    { data: [5, 5, 1, 8, 6], label: 'Usado' },
    { data: [6, 9, 8, 1, 5], label: 'Experto'}
  ]];

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
