import { Selector, t, ClientFunction } from 'testcafe';

export let f = {
  getSelector: function(selector) {
    return (typeof(selector) === 'string') ?
      Selector(selector) : (typeof(selector) === 'function') ? selector : undefined;
  },

  inquiryForAppear: async function(selector, ms, minute = 5) {
    let sl = f.getSelector(selector);
    let i = 0;
    while((sl != undefined) && !(await sl.exists)) {
      await t.wait(ms);
      if ((i++/1000/60) > minute) return;
    }
  },
  
  inquiryForDisappear: async function(selector, ms, minute = 5) {
    let sl = f.getSelector(selector);
    let i = 0;
    while((sl != undefined) && (await sl.exists)) {
      await t.wait(ms);
      if ((i++/1000/60) > minute) return;
    }
  },

  waitForAppear: async function(selector, ms) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .expect(sl.with({visibilityCheck: true}).nth(0).exists)
        .ok({timeout: ms});
    }
  },

  waitForDisappear: async function(selector, ms) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .expect(sl.with({visibilityCheck: true}).nth(0).exists)
        .notOk({timeout: ms});
    }
  },

  selectOption: async function(selector, text) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .hover(sl)
        .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(sl)
        .click(sl.find("option").withText(text).nth(0));
    }
  },

  selectFirstOption: async function(selector) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .hover(sl)
        .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(sl)
        .click(sl.find("option").nth(0));
    }
  },

  selectFirstNonEmptyOption: async function(selector) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      let firstNonEmptyOption = selector
        .find("option")
        .filter((node) => {return (node && node.innerText && node.innerText.trim() !== "") ? true : false;})
        .nth(0);
      await t
        .hover(sl)
        .click(sl)
        .click(firstNonEmptyOption);
    }
  },

  selectLastOption: async function(selector) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .hover(sl)
        .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(sl)
        .click(sl.find("option").nth(-1));
    }
  },

  selectExactOption: async function(selector, exactText) {
    let sl = f.getSelector(selector);
    if (sl != undefined) {
      await t
        .hover(sl)
        .expect(sl.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(sl)
        .click(sl.find("option").withExactText(exactText).nth(0));
    }
  },

  // usage: let value = await f.getLocalStorageValueByKey("mykey");
  getLocalStorageValueByKey: ClientFunction((key) => {
    return new Promise((resolve) => {
      let result = localStorage.getItem(key);
      resolve(result);
    });
  }),

  // usage: await f.setLocalStorage("mykey", "myValue");
  setLocalStorage: ClientFunction((key, value) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }),
};