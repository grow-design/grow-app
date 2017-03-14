import { GrowAppPage } from './app.po';

describe('grow-app App', () => {
  let page: GrowAppPage;

  beforeEach(() => {
    page = new GrowAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
