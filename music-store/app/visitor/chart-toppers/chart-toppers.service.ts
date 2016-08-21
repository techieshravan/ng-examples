import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChartToppersService {

  constructor(private _http: Http) {

  }

  getChartToppers() {
    return this._http.get('');
  }
}
