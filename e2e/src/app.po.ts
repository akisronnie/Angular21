
import { browser, by, element, $, ElementFinder } from 'protractor';

export class AppPage {
public navigateTo(): {} {
    return browser.get('/');
  }

public getUserNameInput(): ElementFinder {
  return $('input[name="username"]');
}
public getUserPasswordInput(): ElementFinder {
  return $('input[name="userpassword"]');
}

public getButtonSubmit(): ElementFinder {
  return $('.enter-button');
}

}
