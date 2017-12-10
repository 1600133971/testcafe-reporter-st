# testcafe-reporter-st

This is the **st** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

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
