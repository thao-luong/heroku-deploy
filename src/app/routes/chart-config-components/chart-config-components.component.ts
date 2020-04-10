import { Component, OnInit } from '@angular/core';
import { BarchartConfigComponent } from '../../components/barchart-config/barchart-config.component';
import  BarchartConfigComponentSRC  from '!!raw-loader!../../components/barchart-config/barchart-config.component.ts';
import  BarchartConfigComponentHTML  from '!!raw-loader!../../components/barchart-config/barchart-config.component.html';
import  BarchartConfigComponentCSS  from '!!raw-loader!../../components/barchart-config/barchart-config.component.css';

import { DualAxisColumnChartComponent } from '../../components/dual-axis-column-chart/dual-axis-column-chart.component';
import  DualAxisColumnChartComponentSRC  from '!!raw-loader!../../components/dual-axis-column-chart/dual-axis-column-chart.component.ts';
import  DualAxisColumnChartComponentHTML  from '!!raw-loader!../../components/dual-axis-column-chart/dual-axis-column-chart.component.html';
import  DualAxisColumnChartComponentCSS  from '!!raw-loader!../../components/dual-axis-column-chart/dual-axis-column-chart.component.css';

import { DualAxisBarChartComponent } from '../../components/dual-axis-bar-chart/dual-axis-bar-chart.component';
import  DualAxisBarChartComponentSRC  from '!!raw-loader!../../components/dual-axis-bar-chart/dual-axis-bar-chart.component.ts';
import  DualAxisBarChartComponentHTML  from '!!raw-loader!../../components/dual-axis-bar-chart/dual-axis-bar-chart.component.html';
import  DualAxisBarChartComponentCSS  from '!!raw-loader!../../components/dual-axis-bar-chart/dual-axis-bar-chart.component.css';

import { ColumnChartConfigComponent } from '../../components/column-chart-config/column-chart-config.component';
import  ColumnChartConfigComponentSRC  from '!!raw-loader!../../components/column-chart-config/column-chart-config.component.ts';
import  ColumnChartConfigComponentHTML  from '!!raw-loader!../../components/column-chart-config/column-chart-config.component.html';
import  ColumnChartConfigComponentCSS  from '!!raw-loader!../../components/column-chart-config/column-chart-config.component.css';

import { PieChartWithColorMappingComponent } from '../../components/pie-chart-with-color-mapping/pie-chart-with-color-mapping.component';
import  PieChartWithColorMappingComponentSRC  from '!!raw-loader!../../components/pie-chart-with-color-mapping/pie-chart-with-color-mapping.component.ts';
import  PieChartWithColorMappingComponentHTML  from '!!raw-loader!../../components/pie-chart-with-color-mapping/pie-chart-with-color-mapping.component.html';
import  PieChartWithColorMappingComponentCSS  from '!!raw-loader!../../components/pie-chart-with-color-mapping/pie-chart-with-color-mapping.component.css';

@Component({
  selector: 'app-chart-config-components',
  templateUrl: './chart-config-components.component.html',
  styleUrls: ['./chart-config-components.component.css']
})
export class ChartConfigComponentsComponent implements OnInit {
  constructor() { }

  chartConfigComponentArray = [
    {
      titleh1: [
        'Customize chart bucket component'
      ],
      titleh2: [
        'Bar chart'
      ],
      for: BarchartConfigComponent,
      ts: BarchartConfigComponentSRC,
      html: BarchartConfigComponentHTML,
      css: BarchartConfigComponentCSS
    },
    {
      titleh1: [],
      titleh2: [
        'Dual Axis Column chart'
      ],
      for: DualAxisColumnChartComponent,
      ts: DualAxisColumnChartComponentSRC,
      html: DualAxisColumnChartComponentHTML,
      css: DualAxisColumnChartComponentCSS
    },
    {
      titleh1: [
        'Customize chart visualization'
      ],
      titleh2: [
        'Dual Axis Bar chart'
      ],
      for: DualAxisBarChartComponent,
      ts: DualAxisBarChartComponentSRC,
      html: DualAxisBarChartComponentHTML,
      css: DualAxisBarChartComponentCSS
    },
    {
      titleh1: [],
      titleh2: [
        'Column chart'
      ],
      for: ColumnChartConfigComponent,
      ts: ColumnChartConfigComponentSRC,
      html: ColumnChartConfigComponentHTML,
      css: ColumnChartConfigComponentCSS
    },
    {
      titleh1: [
        'Pie Chart with color mapping'
      ],
      titleh2: [],
      for: PieChartWithColorMappingComponent,
      ts: PieChartWithColorMappingComponentSRC,
      html: PieChartWithColorMappingComponentHTML,
      css: PieChartWithColorMappingComponentCSS
    }
  ]

  ngOnInit() {
  }
}
