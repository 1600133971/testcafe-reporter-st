const Selector = require('testcafe').Selector;
const config = require('./config.json');

config.forEach((el) => {
  fixture(el.fixture)
    .page(el.url);

  test(el.title + ' - 1', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 2', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 3', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 4', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 5', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 6', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 7', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 8', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 9', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });

  test(el.title + ' - 10', async t => {
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')

      // Use the assertion to check if the actual header text is equal to the expected one
      .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
  });
})
