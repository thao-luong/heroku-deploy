import { Component, OnInit } from '@angular/core';
import { MeasureValueFilterDropdownComponent } from '../../components/measure-value-filter-dropdown/measure-value-filter-dropdown.component';
import  MeasureValueFilterDropdownComponentSRC  from '!!raw-loader!../../components/measure-value-filter-dropdown/measure-value-filter-dropdown.component.ts';
import  MeasureValueFilterDropdownComponentHTML  from '!!raw-loader!../../components/measure-value-filter-dropdown/measure-value-filter-dropdown.component.html';
import  MeasureValueFilterDropdownComponentCSS  from '!!raw-loader!../../components/measure-value-filter-dropdown/measure-value-filter-dropdown.component.css';

import { MeasureValueFilterRatioDropdownComponent } from '../../components/measure-value-filter-ratio-dropdown/measure-value-filter-ratio-dropdown.component';
import  MeasureValueFilterRatioDropdownComponentSRC  from '!!raw-loader!../../components/measure-value-filter-ratio-dropdown/measure-value-filter-ratio-dropdown.component.ts';
import  MeasureValueFilterRatioDropdownComponentHTML  from '!!raw-loader!../../components/measure-value-filter-ratio-dropdown/measure-value-filter-ratio-dropdown.component.html';
import  MeasureValueFilterRatioDropdownComponentCSS  from '!!raw-loader!../../components/measure-value-filter-ratio-dropdown/measure-value-filter-ratio-dropdown.component.css';

import { MeasureValueFilterPercentDropdownComponent } from '../../components/measure-value-filter-percent-dropdown/measure-value-filter-percent-dropdown.component';
import  MeasureValueFilterPercentDropdownComponentSRC  from '!!raw-loader!../../components/measure-value-filter-percent-dropdown/measure-value-filter-percent-dropdown.component.ts';
import  MeasureValueFilterPercentDropdownComponentHTML  from '!!raw-loader!../../components/measure-value-filter-percent-dropdown/measure-value-filter-percent-dropdown.component.html';
import  MeasureValueFilterPercentDropdownComponentCSS  from '!!raw-loader!../../components/measure-value-filter-percent-dropdown/measure-value-filter-percent-dropdown.component.css';

@Component({
  selector: 'app-measure-value-filter-component',
  templateUrl: './measure-value-filter-component.component.html',
  styleUrls: ['./measure-value-filter-component.component.css']
})
export class MeasureValueFilterComponentComponent implements OnInit {
  constructor() { }

  measureValueFilterComponentArray = [
    {
      content: 'This example shows the dropdown component for setting up a measure value filter.',
      for: MeasureValueFilterDropdownComponent,
      ts: MeasureValueFilterDropdownComponentSRC,
      html: MeasureValueFilterDropdownComponentHTML,
      css: MeasureValueFilterDropdownComponentCSS
    },
    {
      content: 'This example shows the dropdown component for setting up a measure value filter with a measure formatted as a percentage.',
      for: MeasureValueFilterRatioDropdownComponent,
      ts: MeasureValueFilterRatioDropdownComponentSRC,
      html: MeasureValueFilterRatioDropdownComponentHTML,
      css: MeasureValueFilterRatioDropdownComponentCSS
    },
    {
      content: 'This example shows the dropdown component for setting up a measure value filter with a measure shown as a percentage.',
      for: MeasureValueFilterPercentDropdownComponent,
      ts: MeasureValueFilterPercentDropdownComponentSRC,
      html: MeasureValueFilterPercentDropdownComponentHTML,
      css: MeasureValueFilterPercentDropdownComponentCSS
    }
  ]

  ngOnInit() {
  }
}
