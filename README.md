# testcafe-reporter-st

This is the **st** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

This reporter isn't shipped with TestCafe by default. In most cases, you need to install it separately.

However, if you need to install this reporter, you can use the following command.

```
npm install testcafe-reporter-st
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter st
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('st') // <-
    .run();
``` 

testcafe chcp 65001 is changed by chcp 936 for windows
(testcafe\node_modules\testcafe-browser-tools\lib\utils\exec.js)
```js
function execWinShellUtf8(command) {
    var setCodePageCmd, restoreCodePageCmd;
    return _regeneratorRuntime.async(function execWinShellUtf8$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                setCodePageCmd = 'FOR /F  "tokens=2 delims=:,." %i in (\'chcp\') do (chcp 936';
                restoreCodePageCmd = 'chcp %i)';
                context$1$0.next = 4;
                return _regeneratorRuntime.awrap(exec(setCodePageCmd + ' & ' + command + ' & ' + restoreCodePageCmd));

            case 4:
                return context$1$0.abrupt('return', context$1$0.sent);

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, null, this);
}
``` 

testcafe plugin adds reportTestStart
(testcafe\lib\reporter\plugin-host.js)
```js
    ReporterPluginHost.prototype.reportTestStart = function reportTestStart() /* name, testRunInfo */{
        throw new Error('Not implemented');
    };

``` 

(testcafe\lib\reporter\index.js)
```js
        task.on('test-run-start', function (testRun) {
            var reportItem = _this._getReportItemForTestRun(testRun);

            if (!reportItem.startTime) reportItem.startTime = new Date();

            _this.plugin.reportTestStart(reportItem.test.name, reportItem.testRunInfo);
        });
``` 
