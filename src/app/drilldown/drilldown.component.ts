import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import DrilldownData from '../../assets/data/drilldown.json';

@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.css']
})
export class DrilldownComponent {
  capability: any;

  private static experienceSpecificStyles: { [ experience: string ]: Partial<ChartDataSets> } = {
    Desconozco: {
      borderColor: 'hsla( 340, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 340, 100%, 50%, 0.1 )',
      hoverBackgroundColor: 'hsla( 340, 100%, 50%, 0.4 )',
      hoverBorderColor: 'hsla( 340, 100%, 50%, 0.75 )'
    },
    Familiarizado: {
      borderColor: 'hsla( 30, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 30, 100%, 50%, 0.1 )',
      hoverBackgroundColor: 'hsla( 30, 100%, 50%, 0.4 )',
      hoverBorderColor: 'hsla( 30, 100%, 50%, 0.75 )',
    },
    Usado: {
      borderColor: 'hsla( 215, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 215, 100%, 50%, 0.1 )',
      hoverBackgroundColor: 'hsla( 215, 100%, 50%, 0.4 )',
      hoverBorderColor: 'hsla( 215, 100%, 50%, 0.75 )',
    },
    Experto: {
      borderColor: 'hsla( 120, 100%, 25%, 0.75 )',
      backgroundColor: 'hsla( 120, 100%, 25%, 0.1 )',
      hoverBackgroundColor: 'hsla( 120, 100%, 25%, 0.4 )',
      hoverBorderColor: 'hsla( 120, 100%, 25%, 0.75 )',
    }
  };

  private static capabilityHeadcount: {[capabilityName: string]: number} = {
    DevOps: 32,
    TAc: 184,
    Microsoft: 354,
    Java: 171 
  };

  chartOptions: ChartOptions = {
    responsive: true,
    scales: { 
      xAxes: [{
        stacked: true,
        gridLines: { display: false }
      }], 
      yAxes: [{ stacked: true, type: 'linear' }]
    },
    tooltips: {
      titleMarginBottom: 8,
      bodySpacing: 8,
      xPadding: 8,
      yPadding: 8,
      caretSize: 8,
      cornerRadius: 8,
      callbacks: {
        title: (chartTooltipItem, chartData): string => {
          return `People count exposed to "${chartTooltipItem[0].label}"`;
        },
        label: (chartTooltipItem, chartData): string => {
          const experienceLevel: string = chartData.datasets[chartTooltipItem.datasetIndex].label;
          return `${experienceLevel}: ${chartTooltipItem.value} employees`;
        }
      }
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.capability = DrilldownData.filter(d => d.name == params['capability']).pop();
    });

    this.capability.categories.forEach(c => {
      c.dataset.map(d => {
        Object.assign(d, {
          borderWidth: 1,
          hoverBorderWidth: 2,
          borderSkipped: 'bottom',
          ...this.getExperienceSpecificStyles(d.label),
        })
      })
    });
  }

  headcount(capability) {
    const hc = DrilldownComponent.capabilityHeadcount[capability.name];
    return `of ${hc} - ${Math.round(capability.responses / hc * 100)}%`;
  }

  private getExperienceSpecificStyles( experience: string ): Partial<ChartDataSets> {
    return DrilldownComponent.experienceSpecificStyles[experience];
  }
}
