/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for cards-trading-angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be cards-trading-angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('cards-trading-angular-app');
    })
  });

  it('network-name should be cards-trading-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('cards-trading-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be cards-trading-angular-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('cards-trading-angular-app');
    });
  });

  
    it('TradingCard component should be loadable',() => {
      page.navigateTo('/TradingCard');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TradingCard');
      });
    });

    it('TradingCard table should have 9 columns',() => {
      page.navigateTo('/TradingCard');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Trader component should be loadable',() => {
      page.navigateTo('/Trader');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Trader');
      });
    });

    it('Trader table should have 3 columns',() => {
      page.navigateTo('/Trader');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('TradeCard component should be loadable',() => {
      page.navigateTo('/TradeCard');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TradeCard');
      });
    });
  

});