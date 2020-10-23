import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import ToolsData from '../../assets/data/tools.json';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent {
  tool: any;
  chartTitle: string;
  people: any;

  chartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'bottom' },
    tooltips: {
      titleMarginBottom: 8,
      bodySpacing: 8,
      xPadding: 8,
      yPadding: 8,
      caretSize: 8,
      cornerRadius: 8,
      callbacks: {
        title: (chartTooltipItem, chartData): string => {
          return `People count for "${chartData.labels[chartTooltipItem[0].index]}" capability`;
        },
        label: (chartTooltipItem, chartData): string => {
          return ` ${chartData.datasets[0].data[chartTooltipItem.index]} employees`;
        }
      }
    }
  };
  chartLabels: Label[] = ToolsData.labels;

  chartColors = [
    {
      borderColor: ['hsla( 120, 100%, 25%, 0.75 )','hsla( 30, 100%, 50%, 0.75 )','hsla( 215, 100%, 50%, 0.75 )','hsla( 340, 100%, 50%, 0.75 )'],
      backgroundColor: ['hsla( 120, 100%, 25%, 0.1 )','hsla( 30, 100%, 50%, 0.1 )','hsla( 215, 100%, 50%, 0.1 )','hsla( 340, 100%, 50%, 0.1 )'],
      pointBackgroundColor: ['hsla( 120, 50%, 50%, 1 )','hsla( 30, 50%, 75%, 1 )','hsla( 215, 50%, 75%, 1 )','hsla( 340, 50%, 75%, 1 )'],
      pointBorderColor: ['hsla( 120, 100%, 25%, 1 )','hsla( 30, 100%, 50%, 1 )','hsla( 215, 100%, 50%, 1 )','hsla( 340, 100%, 50%, 1 )'],
      pointHoverBorderColor: ['hsla( 120, 100%, 25%, 1 )','hsla( 30, 100%, 50%, 1 )','hsla( 215, 100%, 50%, 1 )','hsla( 340, 100%, 50%, 1 )'],
      borderWidth: 1,
      hoverBorderWidth: 3,
    }
  ];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : ToolsData.tools.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  
  showCharts = () => {
    this.people = ToolsData.dataset.filter(p => p.tool == this.tool).pop().people;
    this.chartTitle = this.tool
    this.tool = "";
  }
}
