import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ChartType, ChartOptions } from 'chart.js';
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

  pieChartType: ChartType = 'pie';
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'bottom' }
  };
  pieChartLabels: Label[] = ToolsData.labels;

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
