import { Component, OnInit } from '@angular/core';
import { MeasureValueFilterExamplesComponent } from '../../components/measure-value-filter-examples/measure-value-filter-examples.component';
import  MeasureValueFilterExamplesComponentSRC  from '!!raw-loader!../../components/measure-value-filter-examples/measure-value-filter-examples.component.ts';
import  MeasureValueFilterExamplesComponentHTML  from '!!raw-loader!../../components/measure-value-filter-examples/measure-value-filter-examples.component.html';
import  MeasureValueFilterExamplesComponentCSS  from '!!raw-loader!../../components/measure-value-filter-examples/measure-value-filter-examples.component.css';

import { MeasureValueFilterShownInPercentComponent } from '../../components/measure-value-filter-shown-in-percent/measure-value-filter-shown-in-percent.component';
import  MeasureValueFilterShownInPercentComponentSRC  from '!!raw-loader!../../components/measure-value-filter-shown-in-percent/measure-value-filter-shown-in-percent.component.ts';
import  MeasureValueFilterShownInPercentComponentHTML  from '!!raw-loader!../../components/measure-value-filter-shown-in-percent/measure-value-filter-shown-in-percent.component.html';
import  MeasureValueFilterShownInPercentComponentCSS  from '!!raw-loader!../../components/measure-value-filter-shown-in-percent/measure-value-filter-shown-in-percent.component.css';

import { MeasureValueFilterStackTo100PercentComponent } from '../../components/measure-value-filter-stack-to100-percent/measure-value-filter-stack-to100-percent.component';
import  MeasureValueFilterStackTo100PercentComponentSRC  from '!!raw-loader!../../components/measure-value-filter-stack-to100-percent/measure-value-filter-stack-to100-percent.component.ts';
import  MeasureValueFilterStackTo100PercentComponentHTML  from '!!raw-loader!../../components/measure-value-filter-stack-to100-percent/measure-value-filter-stack-to100-percent.component.html';
import  MeasureValueFilterStackTo100PercentComponentCSS  from '!!raw-loader!../../components/measure-value-filter-stack-to100-percent/measure-value-filter-stack-to100-percent.component.css';

import { MeasureValueFilterFormattedInPercentComponent } from '../../components/measure-value-filter-formatted-in-percent/measure-value-filter-formatted-in-percent.component';
import  MeasureValueFilterFormattedInPercentComponentSRC  from '!!raw-loader!../../components/measure-value-filter-formatted-in-percent/measure-value-filter-formatted-in-percent.component.ts';
import  MeasureValueFilterFormattedInPercentComponentHTML  from '!!raw-loader!../../components/measure-value-filter-formatted-in-percent/measure-value-filter-formatted-in-percent.component.html';
import  MeasureValueFilterFormattedInPercentComponentCSS  from '!!raw-loader!../../components/measure-value-filter-formatted-in-percent/measure-value-filter-formatted-in-percent.component.css';

@Component({
  selector: 'app-filter-by-measure-value',
  templateUrl: './filter-by-measure-value.component.html',
  styleUrls: ['./filter-by-measure-value.component.css']
})
export class FilterByMeasureValueComponent implements OnInit {
  constructor() { }

  filterByMeasureValueComponentArray = [
    {
      title: 'Comparison and range filters',
      content: 'This is the example of filtering the visualization by either one or two measure values:',
      for: MeasureValueFilterExamplesComponent,
      ts: MeasureValueFilterExamplesComponentSRC,
      html: MeasureValueFilterExamplesComponentHTML,
      css: MeasureValueFilterExamplesComponentCSS
    },
    {
      title: 'Filter by a measure value shown in %',
      content: 'When the visualization is filtered by a measure that is shown in %, the filter value is in the original measure scale and not in the percentage scale that is displayed in the visualization',
      for: MeasureValueFilterShownInPercentComponent,
      ts: MeasureValueFilterShownInPercentComponentSRC,
      html: MeasureValueFilterShownInPercentComponentHTML,
      css: MeasureValueFilterShownInPercentComponentCSS
    },
    {
      title: 'Filter by a measure value stacked to 100%',
      content: 'When the visualization is filtered by a measure that is stacked to 100%, the filter value is in the original measure scale and not in the percentage scale that is displayed in the visualization.',
      for: MeasureValueFilterStackTo100PercentComponent,
      ts: MeasureValueFilterStackTo100PercentComponentSRC,
      html: MeasureValueFilterStackTo100PercentComponentHTML,
      css: MeasureValueFilterStackTo100PercentComponentCSS
    },
    {
      title: 'Filter a by measure value formatted in %',
      content: 'When the visualization is filtered by a measure that is formatted in %, the filter value is in the form of a ratio (for instance, 0.5, which is 50%) and not in the percentage scale. This applies to measures that have the percentage format set by the format measure property, calculated measures with the percentage format set in metadata catalog, and arithmetic measures with the change operator.',
      for: MeasureValueFilterFormattedInPercentComponent,
      ts: MeasureValueFilterFormattedInPercentComponentSRC,
      html: MeasureValueFilterFormattedInPercentComponentHTML,
      css: MeasureValueFilterFormattedInPercentComponentCSS
    }
  ]

  ngOnInit() {
  }
}
