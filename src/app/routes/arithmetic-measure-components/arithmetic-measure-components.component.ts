import { Component, OnInit } from '@angular/core';
import { ArithmeticMeasuresRatioComponent } from '../../components/arithmetic-measure-ratio/arithmetic-measure-ratio.component';
import  ArithmeticMeasuresRatioComponentSRC  from '!!raw-loader!../../components/arithmetic-measure-ratio/arithmetic-measure-ratio.component.ts';
import  ArithmeticMeasuresRatioComponentHTML  from '!!raw-loader!../../components/arithmetic-measure-ratio/arithmetic-measure-ratio.component.html';
import  ArithmeticMeasuresRatioComponentCSS  from '!!raw-loader!../../components/arithmetic-measure-ratio/arithmetic-measure-ratio.component.css';

import { ArithmeticMeasureChangeComponent } from '../../components/arithmetic-measure-change/arithmetic-measure-change.component';
import  ArithmeticMeasureChangeComponentSRC  from '!!raw-loader!../../components/arithmetic-measure-change/arithmetic-measure-change.component.ts';
import  ArithmeticMeasureChangeComponentHTML  from '!!raw-loader!../../components/arithmetic-measure-change/arithmetic-measure-change.component.html';
import  ArithmeticMeasureChangeComponentCSS  from '!!raw-loader!../../components/arithmetic-measure-change/arithmetic-measure-change.component.css';

import { ArithmeticMeasureSumComponent } from '../../components/arithmetic-measure-sum/arithmetic-measure-sum.component';
import  ArithmeticMeasureSumComponentSRC  from '!!raw-loader!../../components/arithmetic-measure-sum/arithmetic-measure-sum.component.ts';
import  ArithmeticMeasureSumComponentHTML  from '!!raw-loader!../../components/arithmetic-measure-sum/arithmetic-measure-sum.component.html';
import  ArithmeticMeasureSumComponentCSS  from '!!raw-loader!../../components/arithmetic-measure-sum/arithmetic-measure-sum.component.css';

import { ArithmeticMeasureMultiplicationComponent } from '../../components/arithmetic-measure-multiplication/arithmetic-measure-multiplication.component';
import  ArithmeticMeasureMultiplicationComponentSRC  from '!!raw-loader!../../components/arithmetic-measure-multiplication/arithmetic-measure-multiplication.component.ts';
import  ArithmeticMeasureMultiplicationComponentHTML  from '!!raw-loader!../../components/arithmetic-measure-multiplication/arithmetic-measure-multiplication.component.html';
import  ArithmeticMeasureMultiplicationComponentCSS  from '!!raw-loader!../../components/arithmetic-measure-multiplication/arithmetic-measure-multiplication.component.css';

import { ArithmeticMeasureDrillingComponent } from '../../components/arithmetic-measure-drilling/arithmetic-measure-drilling.component';
import  ArithmeticMeasureDrillingComponentSRC  from '!!raw-loader!../../components/arithmetic-measure-drilling/arithmetic-measure-drilling.component.ts';
import  ArithmeticMeasureDrillingComponentHTML  from '!!raw-loader!../../components/arithmetic-measure-drilling/arithmetic-measure-drilling.component.html';
import  ArithmeticMeasureDrillingComponentCSS  from '!!raw-loader!../../components/arithmetic-measure-drilling/arithmetic-measure-drilling.component.css';

@Component({
  selector: 'app-arithmetic-measure-components',
  templateUrl: './arithmetic-measure-components.component.html',
  styleUrls: ['./arithmetic-measure-components.component.css']
})
export class ArithmeticMeasureComponentsComponent implements OnInit {
  constructor() { }

  arithmeticMeasureComponentArray = [
    {
      title: 'Ratio',
      description: [
        'Take two measures and divide them (e.g. gross margin = gross profit / net sales).'
      ],
      for: ArithmeticMeasuresRatioComponent,
      ts: ArithmeticMeasuresRatioComponentSRC,
      html: ArithmeticMeasuresRatioComponentHTML,
      css: ArithmeticMeasuresRatioComponentCSS
    },
    {
      title: 'Change',
      description: [
        'Calculate percentual change between two measures.','Note: This example shows how it is possible to use Time Over Time Comparison with Arithmetic Measures to display trend of the given metric.'
      ],
      for: ArithmeticMeasureChangeComponent,
      ts: ArithmeticMeasureChangeComponentSRC,
      html: ArithmeticMeasureChangeComponentHTML,
      css: ArithmeticMeasureChangeComponentCSS
    },
    {
      title: 'Sum and difference',
      description: [
        'Add or subtract two measures (e.g. revenue in 2017 - revenue in 2016).'
      ],
      for: ArithmeticMeasureSumComponent,
      ts: ArithmeticMeasureSumComponentSRC,
      html: ArithmeticMeasureSumComponentHTML,
      css: ArithmeticMeasureSumComponentCSS
    },
    {
      title: 'Multiplication',
      description: [
        'Multiply two measures (e.g. price per unit x volume = revenue).'
      ],
      for: ArithmeticMeasureMultiplicationComponent,
      ts: ArithmeticMeasureMultiplicationComponentSRC,
      html: ArithmeticMeasureMultiplicationComponentHTML,
      css: ArithmeticMeasureMultiplicationComponentCSS
    },
    {
      title: 'Arithmetic Measures with Drilling',
      description: [],
      for: ArithmeticMeasureDrillingComponent,
      ts: ArithmeticMeasureDrillingComponentSRC,
      html: ArithmeticMeasureDrillingComponentHTML,
      css: ArithmeticMeasureDrillingComponentCSS
    },
  ]

  ngOnInit() {
  }
}
