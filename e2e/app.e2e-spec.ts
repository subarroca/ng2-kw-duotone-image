import { Ng2KwDuotoneImagePage } from './app.po';

describe('ng2-kw-duotone-image App', function() {
  let page: Ng2KwDuotoneImagePage;

  beforeEach(() => {
    page = new Ng2KwDuotoneImagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
