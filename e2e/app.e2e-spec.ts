import { ApplicationQuizPage } from './app.po';

describe('application-quiz App', function() {
  let page: ApplicationQuizPage;

  beforeEach(() => {
    page = new ApplicationQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
