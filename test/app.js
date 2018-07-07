'use strict';

let createTestCafe = require('testcafe');
let fs = require('fs');
let testcafe = null;
let runner = null;

let listFailedTestName = function(path) {
  let last = fs.readFileSync(path).toString().split('}{').pop()
  let list = new Array()
  JSON.parse(last.charAt(0) == '{' ? last : '{' + last).fixtures.forEach(function(fixture, index) {
    fixture.tests.forEach(function(test, index) {
      if (test.errs.length > 0) {
        list.push({fixture: fixture.name, test: test.name});
      }
    });
  });
  return list;
}

createTestCafe('localhost')
  .then(tc => {
    testcafe = tc;
    runner = testcafe.createRunner();
    let jsonFilePath = 'report_' + Date.now() + '.json';
    let jsonStream = fs.createWriteStream(jsonFilePath);
    return runner
      .startApp('node server.js 8085', 4000)
      .src('fixture1.js')
      .src('fixture2.js')
      .src('fixture3.js')
      .src('fixture4.js')
      .browsers('chrome:headless')
      .reporter('st')
      .reporter('json', jsonStream)
      .concurrency(3)
      .screenshots('./')
      .run()
      .then(failedCount => {
        let ls = listFailedTestName(jsonFilePath);
        if (failedCount > 0 && ls.length > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {
              let flag = false;
              ls.forEach(function(item, index) {
                flag = flag || (item.fixture == fixtureName && item.test == testName);
              });
              return flag;
            })
            .run();
        }
      })
      .then(failedCount => {
        let ls = listFailedTestName(jsonFilePath);
        if (failedCount > 0 && ls.length > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {
              let flag = false;
              ls.forEach(function(item, index) {
                flag = flag || (item.fixture == fixtureName && item.test == testName);
              });
              return flag;
            })
            .run();
        }
      })
      .then(failedCount => {
        let ls = listFailedTestName(jsonFilePath);
        if (failedCount > 0 && ls.length > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {
              let flag = false;
              ls.forEach(function(item, index) {
                flag = flag || (item.fixture == fixtureName && item.test == testName);
              });
              return flag;
            })
            .run();
        }
      })
      .then(failedCount => {
        let ls = listFailedTestName(jsonFilePath);
        if (failedCount > 0 && ls.length > 0) {
          return runner
            .concurrency(1)
            .filter((testName, fixtureName, fixturePath) => {
              let flag = false;
              ls.forEach(function(item, index) {
                flag = flag || (item.fixture == fixtureName && item.test == testName);
              });
              return flag;
            })
            .run();
        }
      })
      .then(failedCount => {
        jsonStream.end();
      });
  })
  .then(failedCount => {
    testcafe.close();
  });
