import { Selector, t } from 'testcafe';

export let f = {
  getSelector: function(selector) {
    return (typeof(selector) === 'string') ? Selector(selector): (typeof(selector) === 'function') ? selector: undefined;
  },

  inquiryForAppear: async function(selector, ms, count = 10) {
    let sl = f.getSelector(selector);
    let i = 0;
    while(!(await sl.exists) && i < count) {
      await t.wait(ms);
      i++;
    }
  },
  
  inquiryForDisappear: async function(selector, ms, count = 10) {
    let sl = f.getSelector(selector);
    let i = 0;
    while((await sl.exists) && i < count) {
      await t.wait(ms);
      i++;
    }
  },

  // wait for a selector to appear
  waitForAppear: async function(selector, ms) {
    let sl = f.getSelector(selector);
    await t.expect(sl.with({visibilityCheck: true}).nth(0).exists).ok({timeout: ms});
  },

  // wait for a selector to disappear
  waitForDisappear: async function(selector, ms) {
    let sl = f.getSelector(selector);
    await t.expect(sl.with({visibilityCheck: true}).nth(0).exists).notOk({timeout: ms});
  }
};