import { Selector } from 'testcafe';

export default function runFixture(name, url) {
  fixture(name)
      .page(url);

  test(`${url} test`, async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });
}