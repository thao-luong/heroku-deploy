import { Component, OnInit } from '@angular/core';
import { SamePeriodColumnChartExampleComponent } from '../../components/same-period-column-chart-example/same-period-column-chart-example.component';
import  SamePeriodColumnChartExampleComponentSRC  from '!!raw-loader!../../components/same-period-column-chart-example/same-period-column-chart-example.component.ts';
import  SamePeriodColumnChartExampleComponentHTML  from '!!raw-loader!../../components/same-period-column-chart-example/same-period-column-chart-example.component.html';
import  SamePeriodColumnChartExampleComponentCSS  from '!!raw-loader!../../components/same-period-column-chart-example/same-period-column-chart-example.component.css';

import { PreviousPeriodColumnChartExampleComponent } from '../../components/previous-period-column-chart-example/previous-period-column-chart-example.component';
import  PreviousPeriodColumnChartExampleComponentSRC  from '!!raw-loader!../../components/previous-period-column-chart-example/previous-period-column-chart-example.component.ts';
import  PreviousPeriodColumnChartExampleComponentHTML  from '!!raw-loader!../../components/previous-period-column-chart-example/previous-period-column-chart-example.component.html';
import  PreviousPeriodColumnChartExampleComponentCSS  from '!!raw-loader!../../components/previous-period-column-chart-example/previous-period-column-chart-example.component.css';

import { PreviousPeriodHeadLineExampleComponent } from '../../components/previous-period-headline-example/previous-period-headline-example.component';
import  PreviousPeriodHeadLineExampleComponentSRC  from '!!raw-loader!../../components/previous-period-headline-example/previous-period-headline-example.component.ts';
import  PreviousPeriodHeadLineExampleComponentHTML  from '!!raw-loader!../../components/previous-period-headline-example/previous-period-headline-example.component.html';
import  PreviousPeriodHeadLineExampleComponentCSS  from '!!raw-loader!../../components/previous-period-headline-example/previous-period-headline-example.component.css';

@Component({
  selector: 'app-time-over-time-comparison',
  templateUrl: './time-over-time-comparison.component.html',
  styleUrls: ['./time-over-time-comparison.component.css']
})
export class TimeOverTimeComparisonComponent implements OnInit {
  constructor() { }

  timeOverTimeComparisonComponentArray = [
    {
      title: 'Comparing to the same period previous year',
      for: SamePeriodColumnChartExampleComponent,
      ts: SamePeriodColumnChartExampleComponentSRC,
      html: SamePeriodColumnChartExampleComponentHTML,
      css: SamePeriodColumnChartExampleComponentCSS
    },
    {
      title: 'Comparing to the previous period with Column chart',
      for: PreviousPeriodColumnChartExampleComponent,
      ts: PreviousPeriodColumnChartExampleComponentSRC,
      html: PreviousPeriodColumnChartExampleComponentHTML,
      css: PreviousPeriodColumnChartExampleComponentCSS
    },
    {
      title: 'Comparing to the previous period with Headline',
      for: PreviousPeriodHeadLineExampleComponent,
      ts: PreviousPeriodHeadLineExampleComponentSRC,
      html: PreviousPeriodHeadLineExampleComponentHTML,
      css: PreviousPeriodHeadLineExampleComponentCSS
    },
  ]

  ngOnInit() {
  }
}
