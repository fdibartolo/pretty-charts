import { Component } from '@angular/core';
import { ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import OverviewData from '../../assets/data/overview.json';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  /**
   * Object containing styles capability-specific styling options for their corresponding datasets.
   */
  private static capabilitySpecificStyles: { [ capabilityName: string ]: Partial<ChartDataSets> } = {
    DevOps: {
      borderColor: 'hsla( 120, 100%, 25%, 0.75 )',
      backgroundColor: 'hsla( 120, 100%, 25%, 0.1 )',
      pointBackgroundColor: 'hsla( 120, 50%, 50%, 1 )',
      pointBorderColor: 'hsla( 120, 100%, 25%, 1 )',
      pointHoverBorderColor: 'hsla( 120, 100%, 25%, 1 )'
    },
    Java: {
      borderColor: 'hsla( 30, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 30, 100%, 50%, 0.1 )',
      pointBackgroundColor: 'hsla( 30, 50%, 75%, 1 )',
      pointBorderColor: 'hsla( 30, 100%, 50%, 1 )',
      pointHoverBorderColor: 'hsla( 30, 100%, 50%, 1 )'
    },
    Net: {
      borderColor: 'hsla( 215, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 215, 100%, 50%, 0.1 )',
      pointBackgroundColor: 'hsla( 215, 50%, 75%, 1 )',
      pointBorderColor: 'hsla( 215, 100%, 50%, 1 )',
      pointHoverBorderColor: 'hsla( 215, 100%, 50%, 1 )'
    },
    TAc: {
      borderColor: 'hsla( 340, 100%, 50%, 0.75 )',
      backgroundColor: 'hsla( 340, 100%, 50%, 0.1 )',
      pointBackgroundColor: 'hsla( 340, 50%, 75%, 1 )',
      pointBorderColor: 'hsla( 340, 100%, 50%, 1 )',
      pointHoverBorderColor: 'hsla( 340, 100%, 50%, 1 )'
    }
  };

  chartType = 'radar';
  chartLabels: Label[ ] = [
    'Containers',
    'Development',
    'Infrastructure as Code',
    'Orchestrators',
    'Scripting',
    'Source Control'
  ];

  chartData: ChartDataSets[] = OverviewData.map((d): ChartDataSets => ({
    data: d.data,
    label: d.capability,
    lineTension: 0.125,
    borderWidth: 2,
    pointRadius: 4,
    pointBorderWidth: 2,
    pointHoverRadius: 8,
    pointHoverBorderWidth: 2,
    pointHoverBackgroundColor: 'hsla( 0, 100%, 100%, 0.75 )',
    ...this.getCapabilitySpecificStyles( d.capability ),
  }));

  chartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        display: false,
        max: 100,
        min: 0,
        stepSize: 10
      }
    },
    tooltips: {
      titleMarginBottom: 8,
      bodySpacing: 8,
      xPadding: 8,
      yPadding: 8,
      caretSize: 8,
      cornerRadius: 8,
      callbacks: {
        title: ( chartTooltipItem, chartData ): string => {
          const skillName: Label = this.chartLabels[ chartTooltipItem[ 0 ].index ];
          return `Capability % with knowledge about "${ skillName }"`;
        },
        label: ( chartTooltipItem, chartData ): string => {
          const capabilityName: string = chartData.datasets[ chartTooltipItem.datasetIndex ].label;
          return ` ${ capabilityName }: ${ chartTooltipItem.value }%`;
        },
      }
    },
  };

  /**
   * Returns a subset of capability-specific styling options for the capability with the name provided.
   *
   * The styles should be used as properties in the corresponding chart dataset.
   *
   * @param capabilityName the name of the capability for which to return the dataset styles.
   */
  private getCapabilitySpecificStyles( capabilityName: string ): Partial<ChartDataSets> {
    return OverviewComponent.capabilitySpecificStyles[ capabilityName ];
  }
}
