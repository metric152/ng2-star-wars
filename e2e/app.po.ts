export class Ng2StarWarsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-star-wars-app h1')).getText();
  }
}
