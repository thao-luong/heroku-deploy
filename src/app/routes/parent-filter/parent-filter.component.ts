import { Component, OnInit } from '@angular/core';
import { ParentFilterExampleComponent } from '../../components/parent-filter-example/parent-filter-example.component';
import  ParentFilterExampleComponentSRC  from '!!raw-loader!../../components/parent-filter-example/parent-filter-example.component.ts';
import  ParentFilterExampleComponentHTML  from '!!raw-loader!../../components/parent-filter-example/parent-filter-example.component.html';
import  ParentFilterExampleComponentCSS  from '!!raw-loader!../../components/parent-filter-example/parent-filter-example.component.css';

@Component({
  selector: 'app-parent-filter',
  templateUrl: './parent-filter.component.html',
  styleUrls: ['./parent-filter.component.css']
})
export class ParentFilterComponent implements OnInit {
  constructor() { }

  for = ParentFilterExampleComponent;
  ts = ParentFilterExampleComponentSRC;
  html = ParentFilterExampleComponentHTML;
  css = ParentFilterExampleComponentCSS;

  ngOnInit() {
  }
}
