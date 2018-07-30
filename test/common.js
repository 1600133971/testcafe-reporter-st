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
  },

  selectOption: async function(selector, text) {
    let sl = f.getSelector(selector);
    await t
      .hover(sl)
      .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
      .click(sl)
      .click(sl.find("option").withText(text).nth(0))
  },

  selectFirstOption: async function(selector) {
    let sl = f.getSelector(selector);
    await t
      .hover(sl)
      .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
      .click(sl)
      .click(sl.find("option").nth(0))
  },

  selectFirstNonEmptyOption: async function(selector) {
    let sl = f.getSelector(selector);
    let firstNonEmptyOption = selector
      .find("option")
      .filter((node) => {
        const option = node;
        if (option && option.innerText && option.innerText.trim() !== "") {
            return true;
        }
        return false;
      })
      .nth(0);
    await t
      .hover(sl)
      .click(sl)
      .click(firstNonEmptyOption);
  },

  selectLastOption: async function(selector) {
    let sl = f.getSelector(selector);
    await t
      .hover(sl)
      .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
      .click(sl)
      .click(sl.find("option").nth(-1))
  },

  selectExactOption: async function(selector, exactText) {
    let sl = f.getSelector(selector);
    await t
      .hover(sl)
      .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
      .click(sl)
      .click(sl.find("option").withExactText(exactText).nth(0))
  },
};