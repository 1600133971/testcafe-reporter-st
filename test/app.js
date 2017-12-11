'use strict';
const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost')
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .src('fixture1.js')
      .src('fixture2.js')
      .browsers('chrome:headless')
      .reporter('st')
      .concurrency(3)
      .screenshots('./')
      .run();
  })
  .then(failedCount => {
    testcafe.close();
  });