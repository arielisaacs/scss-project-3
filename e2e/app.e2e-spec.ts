import { ScssProject3Page } from './app.po';

describe('scss-project-3 App', function() {
  let page: ScssProject3Page;

  beforeEach(() => {
    page = new ScssProject3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
