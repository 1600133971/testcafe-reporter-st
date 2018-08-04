let someAsyncFunc = async function (text) {
  console.log('someAsyncFunc() called: ' + text);
}

let otherAsyncFunc = async function (text) {
  console.log('otherAsyncFunc() called: ' + text);
}

let thirdAsyncFunc = async function (text) {
  console.log('thirdAsyncFunc() called: ' + text);
}

let MyApi = (previousActions = Promise.resolve()) => {
  return {
    someAsyncFunc:  (text) => MyApi(previousActions.then(new Promise(resolve => {someAsyncFunc(text);  setTimeout(() => resolve(), 100);}))),
    otherAsyncFunc: (text) => MyApi(previousActions.then(new Promise(resolve => {otherAsyncFunc(text); setTimeout(() => resolve(), 100);}))),
    thirdAsyncFunc: (text) => MyApi(previousActions.then(new Promise(resolve => {thirdAsyncFunc(text); setTimeout(() => resolve(), 100);}))),
  };
}

let api = MyApi();
exports.api = api;

console.log("before chain")

api
  .someAsyncFunc("1")
  .otherAsyncFunc("2")
  .thirdAsyncFunc('songtao')
  .otherAsyncFunc("3")
  .someAsyncFunc("4")
  .otherAsyncFunc("5");

console.log("after chain")