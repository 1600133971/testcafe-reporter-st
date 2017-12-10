@ -1 +1,35 @@
# testcafe-reporter-st
[![Build Status](https://travis-ci.org/Soluto/testcafe-reporter-st.svg)](https://travis-ci.org/Soluto/testcafe-reporter-st) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This is the **st** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="http://i.imgur.com/7ozfb4Q.png" alt="preview" border="border:2px solid black;"/>
</p>

## Install

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
