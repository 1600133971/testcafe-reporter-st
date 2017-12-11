'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function () {
  return {
    noColors: false,
    failed: 0,
    skipped: 0,
    lastSuiteName: null,
    startTime: null,
    errDescriptors: [],
    fixtureTestCount: 0,
    fixtureDuration: 0,
    fixtureName: null,
    fixtureCount: 0,
    testCount: 0,
    fixturePath: null,
    reportTaskStart: function reportTaskStart(startTime, userAgents, testCount) {
      this.startTime = startTime;
      this.fixtureCount = 0;
      this.testCount = testCount;
      this
        .newline()
        .write(this.chalk.green('[==========] ') + 'TestCafe is starting ...').newline()
        .write(this.chalk.green('[START TIME] ') + startTime).newline()
        .write(this.chalk.green('[  BROWER  ] ') + userAgents).newline().newline();
    },
    reportFixtureStart: function reportFixtureStart(name, path) {
      if (this.lastSuiteName) {
        this.write(this.chalk.green('[----------] ') + this.fixtureTestCount + ' tests from ' + escape(this.lastSuiteName) + ' - ' + escape(this.fixturePath) + ' (' + this.fixtureDuration + ' ms total)').newline().newline();
        this.fixtureDuration = 0;
      }
      this.write(this.chalk.green('[----------] ') + escape(name) + ' - ' + escape(path) ).newline();
      this.lastSuiteName = name;
      this.fixtureTestCount = 0;
      this.fixtureName = name.split('-')[0].trim();
      this.fixtureCount++;
      this.fixturePath = path;
    },
    reportTestDone: function reportTestDone(name, testRunInfo) {
      this.fixtureTestCount++;
      this.write(this.chalk.green('[ RUN      ] ') + escape(this.fixtureName) + ' . ' + escape(name)).newline();
      if (testRunInfo.skipped) {
        this.skipped++;
        this.write(this.chalk.grey('[       -- ] ' + escape(this.fixtureName) + ' . ' + escape(name))).newline();
        return;
      }
      if (testRunInfo.errs && testRunInfo.errs.length > 0) {
        this.failed++;
        this.write(this.chalk.red('[       ' + this.symbols.err + ' ] ' + escape(this.fixtureName) + ' . ' + escape(name))).newline();
        var _this2 = this;
        this.errDescriptors = testRunInfo.errs.map(function (err) {
          return {
            err: err,
            testName: name,
            fixtureName: _this2.lastSuiteName
          };
        });
        this.renderErrors();
        this.errDescriptors = [];
        return;
      }
      this.write(this.chalk.green('[       ' + this.symbols.ok + ' ] ') + escape(this.fixtureName) + ' . ' + escape(name) + ' (' + testRunInfo.durationMs + ' ms)' + (testRunInfo.unstable ? ',(unstable)' : '') + (testRunInfo.screenshotPath ? ',(screenshot: ' + testRunInfo.screenshotPath + ')' : '')).newline();
      this.fixtureDuration += testRunInfo.durationMs;
    },
    reportTaskDone: function reportTaskDone(endTime, passed, warnings) {
      if (this.lastSuiteName) {
        this.write(this.chalk.green('[----------] ') + this.fixtureTestCount + ' tests from ' + escape(this.lastSuiteName) + ' - ' + escape(this.fixturePath) + ' (' + this.fixtureDuration + ' ms total)').newline().newline();
        this.fixtureDuration = 0;
      }
      this
        .write(this.chalk.green('[==========] ') + this.testCount + ' tests from ' + this.fixtureCount + ' test fixtures ran.').newline()
        .write(this.chalk.green('[ END TIME ] ') + endTime).newline()
        .write(this.chalk.green('[ DURATION ] ') + this.moment.duration(endTime - this.startTime).format('d[d] h[h] mm[m] ss[s] SSS[ms]')).newline()
        .write(this.chalk.green('[  PASSED  ] ' + passed + ' tests')).newline()
        .write(this.failed > 0 ? this.chalk.red('[  FAILED  ] ' + this.failed + ' tests') : this.chalk.green('[  FAILED  ] ' + this.failed + ' tests')).newline()
        .write(this.skipped > 0 ? this.chalk.grey('[  SKIPPED ] ' + this.skipped + ' tests') : this.chalk.green('[  SKIPPED ] ' + this.skipped + ' tests')).newline()
        .write(this.chalk.yellow('[  WARNING ] ')).newline().setIndent(0);
      this.renderWarnings(warnings);
    },
    renderErrors: function renderErrors() {
      var _this3 = this;
      this.errDescriptors.forEach(function (errDescriptor) {
        _this3.useWordWrap(true).newline().write(_this3.formatError(errDescriptor.err)).newline().newline();
      });
    },
    renderWarnings: function renderWarnings(warnings) {
      var _this4 = this;
      if (warnings.length) {
        this.newline().setIndent(1).write(this.chalk.bold.yellow('Warnings (' + warnings.length + '):')).newline();
        warnings.forEach(function (msg) {
          _this4.setIndent(1).write(_this4.chalk.bold.yellow('--')).newline().setIndent(2).write(msg).newline();
        });
      }
    }
  }
};

var escape = function escape(str) {
  if (!str) return '';
  return str.toString().replace(/\x1B.*?m/g, '').replace(/\|/g, '||').replace(/\n/g, '|n').replace(/\r/g, '|r').replace(/\[/g, '|[').replace(/\]/g, '|]').replace(/\u0085/g, '|x').replace(/\u2028/g, '|l').replace(/\u2029/g, '|p').replace(/'/g, '|\'');
};
module.exports = exports['default'];
