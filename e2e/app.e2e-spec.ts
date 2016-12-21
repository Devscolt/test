import { MyFirstDeployPage } from './app.po';

describe('my-first-deploy App', function() {
  let page: MyFirstDeployPage;

  beforeEach(() => {
    page = new MyFirstDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
