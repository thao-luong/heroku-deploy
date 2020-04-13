import { Component, OnInit } from '@angular/core';
import { BarChartExportExampleComponent } from '../../components/bar-chart-export-example/bar-chart-export-example.component';
import  BarChartExportExampleComponentSRC  from '!!raw-loader!../../components/bar-chart-export-example/bar-chart-export-example.component.ts';
import  BarChartExportExampleComponentHTML  from '!!raw-loader!../../components/bar-chart-export-example/bar-chart-export-example.component.html';
import  BarChartExportExampleComponentCSS  from '!!raw-loader!../../components/bar-chart-export-example/bar-chart-export-example.component.css';

@Component({
  selector: 'app-export-chart',
  templateUrl: './export-chart.component.html',
  styleUrls: ['./export-chart.component.css']
})
export class ExportChartComponent implements OnInit {
  constructor() { }

  for = BarChartExportExampleComponent;
  ts = BarChartExportExampleComponentSRC;
  html = BarChartExportExampleComponentHTML;
  css = BarChartExportExampleComponentCSS;

  ngOnInit() {
  }
}
