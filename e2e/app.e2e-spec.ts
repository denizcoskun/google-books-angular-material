import { GoogleBooksApiPage } from './app.po';

describe('google-books-api App', () => {
  let page: GoogleBooksApiPage;

  beforeEach(() => {
    page = new GoogleBooksApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
