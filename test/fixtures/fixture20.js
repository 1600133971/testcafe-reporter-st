import { Selector } from 'testcafe';

import { f } from '../chain';

fixture`Getting test`
  .page`http://localhost:8085/testcafe/example/index.html`;

test('My test 12', async t => {
  await f
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')
    .test()
    .eql(Selector('#article-header').innerText, 'Thank you, John Smith!')
    .end();
});