import { GreenSpaceAppPage } from './app.po';

describe('green-space-app App', () => {
  let page: GreenSpaceAppPage;

  beforeEach(() => {
    page = new GreenSpaceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
