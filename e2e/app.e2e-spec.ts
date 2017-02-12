import { TheloopAngularPage } from './app.po';

describe('theloop-angular App', function() {
  let page: TheloopAngularPage;

  beforeEach(() => {
    page = new TheloopAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
