import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EmiCalculatorAppComponent } from '../app/emi-calculator.component';

beforeEachProviders(() => [EmiCalculatorAppComponent]);

describe('App: EmiCalculator', () => {
  it('should create the app',
      inject([EmiCalculatorAppComponent], (app: EmiCalculatorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'emi-calculator works!\'',
      inject([EmiCalculatorAppComponent], (app: EmiCalculatorAppComponent) => {
    expect(app.title).toEqual('emi-calculator works!');
  }));
});
