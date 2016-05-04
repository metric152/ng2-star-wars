import { Ng2StarWarsPage } from './app.po';

describe('ng2-star-wars App', function() {
  let page: Ng2StarWarsPage;

  beforeEach(() => {
    page = new Ng2StarWarsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-star-wars works!');
  });
});
