import { t } from 'testcafe';
import { chain } from './async-chain-proxy';
import { TestCafeCmd } from './testcafe-cmd';

export class ExtendCmd extends TestCafeCmd {
  async test (timeout = 1000) {
    await t.wait(timeout);
  }

  async test1 (timeout = 1000) {
    await this.test(timeout);
  }

  async test2 (timeout = 1000) {
    await this.test1(timeout);
  }

  async foo () {
    return 'foo';
  }
}

export let f = chain(new ExtendCmd());
