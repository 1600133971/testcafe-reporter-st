import { OXPathSelector, CXPathSelector } from '../xpath-selector';

fixture `Use XPath selectors`
    .page('https://devexpress.github.io/testcafe/example/');

test('Click checkboxes o', async t => {
  const firstCheckbox  = OXPathSelector('//input[@type="checkbox"]');
  const secondCheckbox = OXPathSelector('//input[@type="checkbox"]').nth(1);

  await t
    .click(firstCheckbox)
    .click(secondCheckbox);
});

test('Click checkboxes c', async t => {
  const firstCheckbox  = CXPathSelector('//input[@type="checkbox"]');
  const secondCheckbox = CXPathSelector('//input[@type="checkbox"]').nth(1);

  await t
    .click(firstCheckbox)
    .click(secondCheckbox);
});