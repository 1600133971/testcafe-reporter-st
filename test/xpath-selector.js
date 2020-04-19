import { Selector } from 'testcafe';
import { xPathToCss } from './xpath-to-css';

const getElementsByXPath = Selector(xpath => {
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
  const items = [];

  let item = iterator.iterateNext();

  while (item) {
    items.push(item);
    item = iterator.iterateNext();
  }

  return items;
});

function OXPathSelector (xpath) {
  return Selector(getElementsByXPath(xpath));
}

function CXPathSelector (xpath) {
  return Selector(xPathToCss(xpath));
}

module.exports.OXPathSelector = OXPathSelector;
module.exports.CXPathSelector = CXPathSelector;
