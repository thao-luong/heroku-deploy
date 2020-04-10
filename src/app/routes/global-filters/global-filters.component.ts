import { Component, OnInit } from '@angular/core';
import { GlobalFiltersExampleComponent } from '../../components/global-filters-example/global-filters-example.component';
import  GlobalFiltersExampleComponentSRC  from '!!raw-loader!../../components/global-filters-example/global-filters-example.component.ts';
import  GlobalFiltersExampleComponentHTML  from '!!raw-loader!../../components/global-filters-example/global-filters-example.component.html';
import  GlobalFiltersExampleComponentCSS  from '!!raw-loader!../../components/global-filters-example/global-filters-example.component.css';

@Component({
  selector: 'app-global-filters',
  templateUrl: './global-filters.component.html',
  styleUrls: ['./global-filters.component.css']
})
export class GlobalFiltersComponent implements OnInit {
  constructor() { }

  for = GlobalFiltersExampleComponent;
  ts = GlobalFiltersExampleComponentSRC;
  html = GlobalFiltersExampleComponentHTML;
  css = GlobalFiltersExampleComponentCSS;

  ngOnInit() {
  }
}
