import { Component, OnInit } from '@angular/core';
import { HeadlineExportExampleComponent } from '../../components/headline-export-example/headline-export-example.component';
import  HeadlineExportExampleComponentSRC  from '!!raw-loader!../../components/headline-export-example/headline-export-example.component.ts';
import  HeadlineExportExampleComponentHTML  from '!!raw-loader!../../components/headline-export-example/headline-export-example.component.html';
import  HeadlineExportExampleComponentCSS  from '!!raw-loader!../../components/headline-export-example/headline-export-example.component.css';

@Component({
  selector: 'app-export-headline',
  templateUrl: './export-headline.component.html',
  styleUrls: ['./export-headline.component.css']
})
export class ExportHeadlineComponent implements OnInit {
  constructor() { }

  for = HeadlineExportExampleComponent;
  ts = HeadlineExportExampleComponentSRC;
  html = HeadlineExportExampleComponentHTML;
  css = HeadlineExportExampleComponentCSS;

  ngOnInit() {
  }
}
