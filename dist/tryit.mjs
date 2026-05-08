// src/tryit.ts
function tryit(func) {
  if (typeof func !== "function") {
    throw new TypeError("tryit expects a function");
  }
  try {
    const result = func();
    return isPromiseLike(result) ? toPromiseResult(result) : [result, null];
  } catch (err) {
    return [void 0, err];
  }
}
function isPromiseLike(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  return typeof value.then === "function";
}
async function toPromiseResult(promise) {
  return Promise.resolve(promise).then((data) => [data, null]).catch((err) => [void 0, err]);
}
var tryit_default = tryit;
export {
  tryit_default as default,
  tryit
};
