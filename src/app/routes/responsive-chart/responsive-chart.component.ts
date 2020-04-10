import { Component, OnInit } from '@angular/core';
import { ResponsiveExampleComponent } from '../../components/responsive-example/responsive-example.component';
import  ResponsiveExampleComponentSRC  from '!!raw-loader!../../components/responsive-example/responsive-example.component.ts';
import  ResponsiveExampleComponentHTML  from '!!raw-loader!../../components/responsive-example/responsive-example.component.html';
import  ResponsiveExampleComponentCSS  from '!!raw-loader!../../components/responsive-example/responsive-example.component.css';

@Component({
  selector: 'app-responsive-chart',
  templateUrl: './responsive-chart.component.html',
  styleUrls: ['./responsive-chart.component.css']
})
export class ResponsiveChartComponent implements OnInit {
  constructor() { }

  for = ResponsiveExampleComponent;
  ts = ResponsiveExampleComponentSRC;
  html = ResponsiveExampleComponentHTML;
  css = ResponsiveExampleComponentCSS;

  ngOnInit() {
  }
}
