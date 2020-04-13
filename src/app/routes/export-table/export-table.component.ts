import { Component, OnInit } from '@angular/core';
import { TableExportExampleComponent } from '../../components/table-export-example/table-export-example.component';
import  TableExportExampleComponentSRC  from '!!raw-loader!../../components/table-export-example/table-export-example.component.ts';
import  TableExportExampleComponentHTML  from '!!raw-loader!../../components/table-export-example/table-export-example.component.html';
import  TableExportExampleComponentCSS  from '!!raw-loader!../../components/table-export-example/table-export-example.component.css';

@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.css']
})
export class ExportTableComponent implements OnInit {
  constructor() { }

  for = TableExportExampleComponent;
  ts = TableExportExampleComponentSRC;
  html = TableExportExampleComponentHTML;
  css = TableExportExampleComponentCSS;

  ngOnInit() {
  }
}
