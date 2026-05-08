"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tryit.ts
var tryit_exports = {};
__export(tryit_exports, {
  default: () => tryit_default,
  tryit: () => tryit
});
module.exports = __toCommonJS(tryit_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tryit
});
