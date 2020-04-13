import { Component, OnInit } from '@angular/core';
import { PivotTableExportExampleComponent } from '../../components/pivot-table-export-example/pivot-table-export-example.component';
import  PivotTableExportExampleComponentSRC  from '!!raw-loader!../../components/pivot-table-export-example/pivot-table-export-example.component.ts';
import  PivotTableExportExampleComponentHTML  from '!!raw-loader!../../components/pivot-table-export-example/pivot-table-export-example.component.html';
import  PivotTableExportExampleComponentCSS  from '!!raw-loader!../../components/pivot-table-export-example/pivot-table-export-example.component.css';

@Component({
  selector: 'app-export-pivot-table',
  templateUrl: './export-pivot-table.component.html',
  styleUrls: ['./export-pivot-table.component.css']
})
export class ExportPivotTableComponent implements OnInit {
  constructor() { }

  for = PivotTableExportExampleComponent;
  ts = PivotTableExportExampleComponentSRC;
  html = PivotTableExportExampleComponentHTML;
  css = PivotTableExportExampleComponentCSS;

  ngOnInit() {
  }
}
