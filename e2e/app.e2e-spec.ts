import { AngelaCafeAppPage } from './app.po';

describe('angela-cafe-app App', () => {
  let page: AngelaCafeAppPage;

  beforeEach(() => {
    page = new AngelaCafeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
