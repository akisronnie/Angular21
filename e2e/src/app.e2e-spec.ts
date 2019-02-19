import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    await page.getUserNameInput().sendKeys('Vasiliy Alibaba');
    browser.sleep(5000);
    await page.getUserPasswordInput().sendKeys('1111');
    browser.sleep(5000);
    await page.getButtonSubmit().click();
    browser.sleep(5000);
    expect(page.getUserNameInput().getText()).toEqual('Vasiliy Alibaba');
  });
});
