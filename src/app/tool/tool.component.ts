import { Component, OnInit } from '@angular/core';
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
  public tool: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : ToolsData.tools.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'top' }
  };

  pieChartLabels: Label[] = ToolsData.labels;
  pieChartData: number[] = [300, 500, 100, 250];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
}
