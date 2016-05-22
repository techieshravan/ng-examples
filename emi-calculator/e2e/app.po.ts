export class EmiCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('emi-calculator-app h1')).getText();
  }
}
