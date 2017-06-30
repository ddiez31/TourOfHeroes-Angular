import { TourOfHeroesAngularPage } from './app.po';

describe('tour-of-heroes-angular App', () => {
  let page: TourOfHeroesAngularPage;

  beforeEach(() => {
    page = new TourOfHeroesAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
