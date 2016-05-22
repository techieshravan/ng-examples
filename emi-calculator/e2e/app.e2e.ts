import { EmiCalculatorPage } from './app.po';

describe('emi-calculator App', function() {
  let page: EmiCalculatorPage;

  beforeEach(() => {
    page = new EmiCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('emi-calculator works!');
  });
});
