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
    let htmlFilePath = 'report_' + Date.now() + '.html';
    return runner
      .startApp('node server.js 8085', 4000)
      .src(['fixtures/*.js'])
      .browsers('chrome:headless')
      .reporter(['st', {name: 'json', output: jsonFilePath}, {name: 'st-html', output: htmlFilePath}])
      .concurrency(4)
      .screenshots('./')
      .run()
      .then(failedCount => {
        if (failedCount > 0) {
          return runner
            .reporter(['st'])
            .concurrency(1)
            .filter((testName, fixtureName) => {return checkFailedTest(testName, fixtureName, jsonFilePath);})
            .run();
        }
      });
  })
  .then(failedCount => {
    testcafe.close();
  });
