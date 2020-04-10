import { Component, OnInit } from '@angular/core';
import { TableDrillExampleComponent } from '../../components/table-drill-example/table-drill-example.component';
import  TableDrillExampleComponentSRC  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.ts';
import  TableDrillExampleComponentHTML  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.html';
import  TableDrillExampleComponentCSS  from '!!raw-loader!../../components/table-drill-example/table-drill-example.component.css';

import { DrillWithExternalDataComponent } from '../../components/drill-with-external-data/drill-with-external-data.component';
import  DrillWithExternalDataComponentSRC  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.ts';
import  DrillWithExternalDataComponentHTML  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.html';
import  DrillWithExternalDataComponentCSS  from '!!raw-loader!../../components/drill-with-external-data/drill-with-external-data.component.css';

@Component({
  selector: 'app-drilling-components',
  templateUrl: './drilling-components.component.html',
  styleUrls: ['./drilling-components.component.css']
})
export class DrillingComponentsComponent implements OnInit {
  constructor() { }

  drillingComponentArray = [
    {
      title: 'Table Drilling',
      content: [],
      for: TableDrillExampleComponent,
      ts: TableDrillExampleComponentSRC,
      html: TableDrillExampleComponentHTML,
      css: TableDrillExampleComponentCSS
    },
    {
      title: 'Drill With External Data',
      content: [
        'Here is how you can use visualization drilling to display 3rd party content based on the clicked item.',
        'You can display a mock user profile by clicking on an employee name. An request is created using the selected employee name and retrieves the mock employee information asynchroneously.'
      ],
      for: DrillWithExternalDataComponent,
      ts: DrillWithExternalDataComponentSRC,
      html: DrillWithExternalDataComponentHTML,
      css: DrillWithExternalDataComponentCSS
    }
  ]

  ngOnInit() {
  }
}
