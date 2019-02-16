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
    fixtureTestCount: 0,
    fixtureDuration: 0,
    fixtureName: null,
    fixtureCount: 0,
    testCount: 0,
    fixturePath: null,
    reportTaskStart: async function reportTaskStart(startTime, userAgents, testCount) {
      this.startTime = startTime;
      this.fixtureCount = 0;
      this.testCount = testCount;
      this
        .newline()
        .write(this.chalk.green('[==========] ' + 'TestCafe is starting ...')).newline()
        .write(this.chalk.green('[START TIME] ' + this.moment(startTime).format('YYYY-MM-DD HH:mm:ss'))).newline()
        .write(this.chalk.green('[  BROWER  ] ' + userAgents)).newline().newline();
    },
    reportFixtureStart: async function reportFixtureStart(name, path, meta) {
      if (this.lastSuiteName) {
        this.write(this.chalk.green('[----------] ' + this.stasticTest(this.fixtureTestCount) + ' from ' + escape(this.lastSuiteName) + ' (' + escape(this.fixturePath) + ')(' + this.fixtureDuration + ' ms total)')).newline().newline();
        this.fixtureDuration = 0;
      }
      this.write(this.chalk.green('[----------] ' + escape(name) + ' (' + escape(path) + ')')).newline();
      this.lastSuiteName = name;
      this.fixtureTestCount = 0;
      this.fixtureName = name.split('-')[0].trim();
      this.fixtureCount++;
      this.fixturePath = path;
    },
    reportTestStart: async function reportTestStart(name, testRunInfo) {
      this.write(this.chalk.green('[ RUN      ] ') + escape(this.fixtureName) + ' . ' + escape(name)).newline();
    },
    reportTestDone: async function reportTestDone(name, testRunInfo, meta) {
      this.fixtureTestCount++;
      if (testRunInfo.skipped) {
        this.skipped++;
        this.write(this.chalk.grey('[  SKIPPED ] ' + escape(this.fixtureName) + ' . ' + escape(name))).newline();
        return;
      }
      if (testRunInfo.errs && testRunInfo.errs.length > 0) {
        this.failed++;
        this.write(this.chalk.red('[   FAILED ] ' + escape(this.fixtureName) + ' . ' + escape(name))).newline();
        this.renderErrors(name, testRunInfo);
        return;
      }
      this.write(this.chalk.green('[       OK ] ' + escape(this.fixtureName) + ' . ' + escape(name) + ' (' + testRunInfo.durationMs + ' ms)' + (testRunInfo.unstable ? ',(unstable)' : '') + (testRunInfo.screenshotPath ? ',(screenshot: ' + testRunInfo.screenshotPath + ')' : ''))).newline();
      this.fixtureDuration += testRunInfo.durationMs;

      if (!!testRunInfo.warnings.length) {
        this.write(this.chalk.yellow('[  WARNING ] ')).newline().setIndent(0).renderWarnings(testRunInfo.warnings);
        this.newline().setIndent(0);
      }
    },
    reportTaskDone: async function reportTaskDone(endTime, passed, warnings, result) {
      if (this.lastSuiteName) {
        this.write(this.chalk.green('[----------] ' + this.stasticTest(this.fixtureTestCount) + ' from ' + escape(this.lastSuiteName) + ' (' + escape(this.fixturePath) + ')(' + this.fixtureDuration + ' ms total)')).newline().newline();
        this.fixtureDuration = 0;
      }
      if (warnings.length) {
        this.write(this.chalk.yellow('[  WARNING ] ')).newline().setIndent(0).renderWarnings(warnings);
        this.newline().setIndent(0);
      }
      this
        .write(this.chalk.green('[==========] ' + this.stasticTest(this.testCount + this.skipped) + ' from ' + this.stasticFixture(this.fixtureCount) + ' ran.')).newline()
        .write(this.chalk.green('[ END TIME ] ' + this.moment(endTime).format('YYYY-MM-DD HH:mm:ss'))).newline()
        .write(this.chalk.green('[ DURATION ] ' + this.moment.duration(endTime - this.startTime).format('d[d] h[h] mm[m] ss[s] SSS[ms]'))).newline()
        .write(this.chalk.green('[    TOTAL ] ' + this.stasticTest(this.testCount + this.skipped))).newline()
        .write(this.chalk.green('[   PASSED ] ' + this.stasticTest(passed))).newline()
        .write(this.failed > 0 ? this.chalk.red('[   FAILED ] ' + this.stasticTest(this.failed)) : this.chalk.green('[   FAILED ] ' + this.stasticTest(this.failed))).newline()
        .write(this.skipped > 0 ? this.chalk.grey('[  SKIPPED ] ' + this.stasticTest(this.skipped)) : this.chalk.green('[  SKIPPED ] ' + this.stasticTest(this.skipped))).newline()
        .write(warnings.length > 0 ? this.chalk.yellow('[ WARNINGS ] ' + this.stasticTest(warnings.length)) : this.chalk.green('[ WARNINGS ] ' + this.stasticTest(warnings.length))).newline()
        .write(this.chalk.green('[==========] ' + 'TestCafe is finished ...')).newline();
    },
    stasticTest: function stasticTest(num) {
      return num + (num <= 1 ? ' test' : ' tests');
    },
    stasticFixture: function stasticFixture(num) {
      return num + (num <= 1 ? ' fixture' : ' fixtures');
    },
    renderErrors: function renderErrors(name, testRunInfo) {
      var _this = this;
      var errDescriptors = testRunInfo.errs.map(function (err) {
        return {
          err: err,
          testName: name,
          fixtureName: _this.lastSuiteName
        };
      });
      errDescriptors.forEach(function (errDescriptor) {
        _this.useWordWrap(true).newline().write(_this.formatError(errDescriptor.err)).newline().newline();
      });
    },
    renderWarnings: function renderWarnings(warnings) {
      var _this = this;
      this.newline().setIndent(1).write(this.chalk.bold.yellow('Warnings (' + warnings.length + '):')).newline();
      warnings.forEach(function (msg) {
        _this.setIndent(1).write(_this.chalk.bold.yellow('--')).newline().setIndent(2).write(_this.chalk.bold.yellow(msg)).newline();
      });
    }
  }
};

var escape = function escape(str) {
  if (!str) return '';
  return str.toString().replace(/\x1B.*?m/g, '').replace(/\|/g, '||').replace(/\n/g, '|n').replace(/\r/g, '|r').replace(/\[/g, '|[').replace(/\]/g, '|]').replace(/\u0085/g, '|x').replace(/\u2028/g, '|l').replace(/\u2029/g, '|p').replace(/'/g, '|\'');
};

module.exports = exports['default'];
