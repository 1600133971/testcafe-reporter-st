import { ClientFunction } from 'testcafe';

export let c = {
  // usage: let value = await c.getLocalStorageValueByKey("mykey");
  getLocalStorageValueByKey: ClientFunction((key) => {
    return new Promise((resolve) => {
      let result = localStorage.getItem(key);
      resolve(result);
    });
  }),

  // usage: await c.setLocalStorage("mykey", "myValue");
  setLocalStorage: ClientFunction((key, value) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  })
};