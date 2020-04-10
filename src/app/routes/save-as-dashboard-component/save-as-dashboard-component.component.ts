import { Component, OnInit } from '@angular/core';
import { SaveAsDashboardComponent } from '../../components/save-as-dashboard/save-as-dashboard.component';
import  SaveAsDashboardComponentSRC  from '!!raw-loader!../../components/save-as-dashboard/save-as-dashboard.component.ts';
import  SaveAsDashboardComponentHTML  from '!!raw-loader!../../components/save-as-dashboard/save-as-dashboard.component.html';
import  SaveAsDashboardComponentCSS  from '!!raw-loader!../../components/save-as-dashboard/save-as-dashboard.component.css';

@Component({
  selector: 'app-save-as-dashboard-component',
  templateUrl: './save-as-dashboard-component.component.html',
  styleUrls: ['./save-as-dashboard-component.component.css']
})
export class SaveAsDashboardComponentComponent implements OnInit {
  constructor() { }

  for = SaveAsDashboardComponent;
  ts = SaveAsDashboardComponentSRC;
  html = SaveAsDashboardComponentHTML;
  css = SaveAsDashboardComponentCSS;

  ngOnInit() {
  }
}
