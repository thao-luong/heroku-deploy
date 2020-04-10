import { Component, OnInit } from '@angular/core';
import { PivotTableComponent } from '../../components/pivot-table/pivot-table.component';
import  PivotTableComponentSRC  from '!!raw-loader!../../components/pivot-table/pivot-table.component.ts';
import  PivotTableComponentHTML  from '!!raw-loader!../../components/pivot-table/pivot-table.component.html';
import  PivotTableComponentCSS  from '!!raw-loader!../../components/pivot-table/pivot-table.component.css';

import { PivotTableTotalsComponent } from '../../components/pivot-table-total/pivot-table-total.component';
import  PivotTableTotalsComponentSRC  from '!!raw-loader!../../components/pivot-table-total/pivot-table-total.component.ts';
import  PivotTableTotalsComponentHTML  from '!!raw-loader!../../components/pivot-table-total/pivot-table-total.component.html';
import  PivotTableTotalsComponentCSS  from '!!raw-loader!../../components/pivot-table-total/pivot-table-total.component.css';

import { PivotTableDrillExampleComponent } from '../../components/pivot-table-drill-example/pivot-table-drill-example.component';
import  PivotTableDrillExampleComponentSRC  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.ts';
import  PivotTableDrillExampleComponentHTML  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.html';
import  PivotTableDrillExampleComponentCSS  from '!!raw-loader!../../components/pivot-table-drill-example/pivot-table-drill-example.component.css';

import { PivotTableSizingComponent } from '../../components/pivot-table-sizing/pivot-table-sizing.component';
import  PivotTableSizingComponentSRC  from '!!raw-loader!../../components/pivot-table-sizing/pivot-table-sizing.component.ts';
import  PivotTableSizingComponentHTML  from '!!raw-loader!../../components/pivot-table-sizing/pivot-table-sizing.component.html';
import  PivotTableSizingComponentCSS  from '!!raw-loader!../../components/pivot-table-sizing/pivot-table-sizing.component.css';

@Component({
  selector: 'app-pivot-table-components',
  templateUrl: './pivot-table-components.component.html',
  styleUrls: ['./pivot-table-components.component.css']
})
export class PivotTableComponentsComponent implements OnInit {
  constructor() { }

  pivotTableComponentArray = [
    {
      title: 'Example of Presorted Pivot Table',
      for: PivotTableComponent,
      ts: PivotTableComponentSRC,
      html: PivotTableComponentHTML,
      css: PivotTableComponentCSS
    },
    {
      title: 'Example of Pivot Table has Totals, Group Totals, and Rows grouping',
      for: PivotTableTotalsComponent,
      ts: PivotTableTotalsComponentSRC,
      html: PivotTableTotalsComponentHTML,
      css: PivotTableTotalsComponentCSS
    },
    {
      title: 'Example of Drill Event',
      for: PivotTableDrillExampleComponent,
      ts: PivotTableDrillExampleComponentSRC,
      html: PivotTableDrillExampleComponentHTML,
      css: PivotTableDrillExampleComponentCSS
    },
    {
      title: 'Example of table column sizing',
      for: PivotTableSizingComponent,
      ts: PivotTableSizingComponentSRC,
      html: PivotTableSizingComponentHTML,
      css: PivotTableSizingComponentCSS
    }
  ]

  ngOnInit() {
  }
}
