import { Selector } from 'testcafe';
import { f } from '../common';

fixture`Getting seventh`
  .page`http://localhost:8085/testcafe/example/index.html`;

test('#1', async t => {
  await f.waitForAppear('#developer-name', 1000);
  await f.inquiryForAppear('#developer-name', 500);
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button');
  await f.waitForDisappear('#developer-name', 1000);
  await f.inquiryForDisappear('#developer-name', 500);
  await f.waitForAppear('#article-header', 1000);
  await f.inquiryForAppear('#article-header', 500);
  // Use the assertion to check if the actual header text is equal to the expected one
  await t
    .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});