Feature('test Tariff');

Scenario('test tariff trial', ({ I }) => {
  I.amOnPage('https://www.reg.ru/web-tools/google-apps/');
  I.scrollTo('#tariffs_table');
  I.click('Выбрать', '//a[contains(@class,"b-plans-pillar__item b-plans-pillar__item_type_trial")]//div');
  I.waitForVisible('.base-footer',10);
  I.seeElement('.base-footer','//span[contains(normalize-space(text()),"Бесплатно")]');
  I.seeInCurrentUrl('trial');
});

Scenario('test endless tariff', async ({I}) => {
  const assert = require('assert');
  I.amOnPage('https://www.reg.ru/web-sites/website-builder/');
  I.scrollTo('//div//p[contains(@class,"b-plans-pillar__price b-plans-pillar__price_style_single")]');
  let price = await I.grabTextFrom('//div//p[contains(@class,"b-plans-pillar__price b-plans-pillar__price_style_single")]/strong');
  I.click('//div[contains(@class,"b-plans-pillar__item b-plans-pillar__item_type_infinite i-analytics i-analytics_event_google i-analytics_event_yandex")]//div[contains(normalize-space(text()),"Заказать")]');
  I.waitForElement('//div[contains(@class,"order-footer-price__total")]',15);
  let foo = await I.grabTextFrom('//div[contains(@class,"order-footer-price__total")]//span[contains(@class,"order-footer-price__price")]');
  let startPrice = price.replace(/\W/g,'');
  let fooPrice = foo.replace(/\W/g,'');
  assert.equal(startPrice, fooPrice);
});
