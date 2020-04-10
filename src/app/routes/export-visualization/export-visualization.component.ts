import { Component, OnInit } from '@angular/core';
import { VisualizationColumnChartExportExampleComponent } from '../../visualizations/visualization-column-chart-export-example/visualization-column-chart-export-example.component';
import  VisualizationColumnChartExportExampleComponentSRC  from '!!raw-loader!../../visualizations/visualization-column-chart-export-example/visualization-column-chart-export-example.component.ts';
import  VisualizationColumnChartExportExampleComponentHTML  from '!!raw-loader!../../visualizations/visualization-column-chart-export-example/visualization-column-chart-export-example.component.html';
import  VisualizationColumnChartExportExampleComponentCSS  from '!!raw-loader!../../visualizations/visualization-column-chart-export-example/visualization-column-chart-export-example.component.css';

@Component({
  selector: 'app-export-visualization',
  templateUrl: './export-visualization.component.html',
  styleUrls: ['./export-visualization.component.css']
})
export class ExportVisualizationComponent implements OnInit {
  constructor() { }

  for = VisualizationColumnChartExportExampleComponent;
  ts = VisualizationColumnChartExportExampleComponentSRC;
  html = VisualizationColumnChartExportExampleComponentHTML;
  css = VisualizationColumnChartExportExampleComponentCSS;

  ngOnInit() {
  }
}
