'use strict';

let createTestCafe = require('testcafe');
let fs = require('fs');
let testcafe = null;

let checkFailedTest = function(testName, fixtureName, logPathName) {
  let flag = false;
  JSON.parse('[' + fs.readFileSync(logPathName).toString().replace(/}{/g, '},{') + ']').pop().fixtures.forEach(function(fixture, index) {
    fixture.tests.forEach(function(test, index) {
      if (test.errs.length > 0)
        flag = flag || (fixture.name == fixtureName && test.name == testName);
    });
  });
  return flag;
}

createTestCafe('localhost')
  .then(tc => {
    testcafe = tc;
    let runner = testcafe.createRunner();
    let jsonFilePath = 'report_' + Date.now() + '.json';
    let jsonStream = fs.createWriteStream(jsonFilePath);
    let htmlStream = fs.createWriteStream('report_' + Date.now() + '.html');
    return runner
      .startApp('node server.js 8085', 4000)
      .src('fixture1.js')
      .src('fixture2.js')
      .src('fixture3.js')
      .src('fixture4.js')
      .src('fixture5.js')
      .src('fixture6.js')
      .browsers('chrome:headless')
      .reporter('st')
      .reporter('json', jsonStream)
      .reporter('st-html', htmlStream)
      .concurrency(4)
      .screenshots('./')
      .run()
      .then(failedCount => {
        if (failedCount > 0) {
          return runner
            .concurrency(3)
            .filter((testName, fixtureName, fixturePath) => {return checkFailedTest(testName, fixtureName, jsonFilePath);})
            .run();
        }
      })
      .then(failedCount => {
        if (failedCount > 0) {
          return runner
            .concurrency(2)
            .filter((testName, fixtureName, fixturePath) => {return checkFailedTest(testName, fixtureName, jsonFilePath);})
            .run();
        }
      })
      .then(failedCount => {
        if (failedCount > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {return checkFailedTest(testName, fixtureName, jsonFilePath);})
            .run();
        }
      })
      .then(failedCount => {
        if (failedCount > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {return checkFailedTest(testName, fixtureName, jsonFilePath);})
            .run();
        }
      })
      .then(failedCount => {
        jsonStream.end();
        htmlStream.end();
      });
  })
  .then(failedCount => {
    testcafe.close();
  });
