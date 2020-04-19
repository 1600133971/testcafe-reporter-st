import { t } from 'testcafe';

export class TestCafeCmd {
  async click (selector, options) {
    await t.click(selector, options);
  }

  async rightClick (selector, options) {
    await t.rightClick(selector, options);
  }

  async doubleClick (selector, options) {
    await t.doubleClick(selector, options);
  }

  async hover (selector, options) {
    await t.hover(selector, options);
  }

  async drag (selector, dragOffsetX, dragOffsetY, options) {
    await t.drag(selector, dragOffsetX, dragOffsetY, options);
  }

  async dragToElement (selector, destinationSelector, options) {
    await t.dragToElement(selector, destinationSelector, options);
  }

  async typeText (selector, text, options) {
    await t.typeText(selector, text, options);
  }

  async selectText (selector, startPos, endPos, options) {
    await t.selectText(selector, startPos, endPos, options);
  }

  async selectTextAreaContent (selector, startLine, startPos, endLine, endPos, options) {
    await t.selectTextAreaContent(selector, startLine, startPos, endLine, endPos, options);
  }

  async selectEditableContent (startSelector, endSelector, options) {
    await t.selectEditableContent(startSelector, endSelector, options);
  }

  async pressKey (keys, options) {
    await t.pressKey(keys, options);
  }

  async wait (timeout) {
    await t.wait(timeout);
  }

  async navigateTo (url) {
    await t.navigateTo(url);
  }

  async setFilesToUpload (selector, filePath) {
    await t.setFilesToUpload(selector, filePath);
  }

  async clearUpload (selector) {
    await t.clearUpload(selector);
  }

  async takeScreenshot (options) {
    await t.takeScreenshot(options);
  }

  async takeElementScreenshot (selector, path, options) {
    await t.takeElementScreenshot(selector, path, options);
  }

  async resizeWindow (width, height) {
    await t.resizeWindow(width, height);
  }

  async resizeWindowToFitDevice (deviceName, options) {
    await t.resizeWindowToFitDevice(deviceName, options);
  }

  async maximizeWindow () {
    await t.maximizeWindow();
  }

  async switchToIframe (selector) {
    await t.switchToIframe(selector);
  }

  async switchToMainWindow () {
    await t.switchToMainWindow();
  }

  async eval (fn, options) {
    await t.eval(fn, options);
  }

  async setNativeDialogHandler (fn, options) {
    await t.setNativeDialogHandler(fn, options);
  }

  async getNativeDialogHistory () {
    return await t.getNativeDialogHistory();
  }

  async getBrowserConsoleMessages () {
    return await t.getBrowserConsoleMessages();
  }

  // expect

  async debug () {
    await t.debug();
  }

  async setTestSpeed (speed) {
    await t.setTestSpeed(speed);
  }

  async setPageLoadTimeout (duration) {
    await t.setPageLoadTimeout(duration);
  }

  async useRole (role) {
    await t.useRole(role);
  }

  async addRequestHooks (hooks) {
    await t.addRequestHooks(hooks);
  }

  async removeRequestHooks (hooks) {
    await t.removeRequestHooks(hooks);
  }

  async eql (actual, expected, message, options) {
    await t.expect(actual).eql(expected, message, options);
  }

  async notEql (actual, unexpected, message, options) {
    await t.expect(actual).notEql(unexpected, message, options);
  }

  async ok (actual, message, options) {
    await t.expect(actual).ok(message, options);
  }

  async notOk (actual, message, options) {
    await t.expect(actual).notOk(message, options);
  }

  async contains (actual, expected, message, options) {
    await t.expect(actual).contains(expected, message, options);
  }

  async notContains (actual, expected, message, options) {
    await t.expect(actual).notContains(expected, message, options);
  }

  async typeOf (actual, typeName, message, options) {
    await t.expect(actual).typeOf(typeName, message, options);
  }

  async notTypeOf (actual, typeName, message, options) {
    await t.expect(actual).notTypeOf(typeName, message, options);
  }

  async gt (actual, expected, message, options) {
    await t.expect(actual).gt(expected, message, options);
  }

  async gte (actual, expected, message, options) {
    await t.expect(actual).gte(expected, message, options);
  }

  async lt (actual, expected, message, options) {
    await t.expect(actual).lt(expected, message, options);
  }

  async lte (actual, expected, message, options) {
    await t.expect(actual).lte(expected, message, options);
  }

  async within (actual, start, finish, message, options) {
    await t.expect(actual).within(start, finish, message, options);
  }

  async notWithin (actual, start, finish, message, options) {
    await t.expect(actual).notWithin(start, finish, message, options);
  }

  async match (actual, re, message, options) {
    await t.expect(actual).match(re, message, options);
  }

  async notMatch (actual, re, message, options) {
    await t.expect(actual).notMatch(re, message, options);
  }
}
