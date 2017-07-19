import { LayoutappPage } from './app.po';

describe('layoutapp App', () => {
  let page: LayoutappPage;

  beforeEach(() => {
    page = new LayoutappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
