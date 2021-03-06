
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Kpi } from '@gooddata/react-components';
import {
  projectId,
  totalSalesIdentifier
} from '../../../utils/fixtures.js';

interface KpiProps {
  measure: string;
  projectId: any;
  format?: string;
  filters?: any[];
  onLoadingChanged?: (any);
  onError?: (any);
}

@Component({
  selector: 'app-kpi',
  template: '<span [id]="rootDomID"></span>'
})

export class KpiComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() filters: any[];
  @Input() format: string;
  @Input() onLoadingChanged?: (any);
  @Input() onError?: (any);

  public rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): KpiProps {
    return {
      projectId: projectId,
      measure: totalSalesIdentifier,
      format: this.format,
      filters: this.filters,
      onLoadingChanged: this.onLoadingChanged,
      onError: this.onError
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Kpi, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
