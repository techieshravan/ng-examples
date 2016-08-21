import { Component, OnInit } from '@angular/core';
import { ChartToppersService } from './chart-toppers.service';
import { ChartTopper } from './chartTopper';

@Component({
  moduleId: module.id,
  selector: 'chart-toppers',
  templateUrl: 'chart-toppers.component.html',
  providers: [ChartToppersService]
})
export class ChartToppersComponent implements OnInit {

  chartToppersList: ChartTopper[];

  constructor (private _chartToppersService: ChartToppersService) {
    this.chartToppersList = [
      {rank: 1, song: 'Cheap Thrills'},
      {rank: 2, song: 'Cold Water'},
      {rank: 3, song: 'This Is What You Came For'},
      {rank: 4, song: 'Heathens'},
      {rank: 5, song: 'One Dance'},
      {rank: 6, song: 'Closer'},
      {rank: 7, song: 'Ride'},
      {rank: 8, song: 'Don\'t Let Me Down'},
      {rank: 9, song: 'Can\'t Stop The Feeling!'},
      {rank: 10, song: 'Needed Me'}
    ];
  }

  ngOnInit () {
    //this._getChartToppers();
  }

  private _getChartToppers () {
    this._chartToppersService.getChartToppers();
  }
}