(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tryit = {}));
})(this, (function (exports) { 'use strict';

    function tryit(promiseOrFunction) {
        if (promiseOrFunction instanceof Promise) {
            return promiseOrFunction
                .then(function (data) { return [data, null]; })
                .catch(function (err) { return [undefined, err]; });
        }
        else if (promiseOrFunction instanceof Function) {
            try {
                var result = promiseOrFunction();
                if (result instanceof Promise) {
                    return tryit(result);
                }
                return [result, null];
            }
            catch (err) {
                return [undefined, err];
            }
        }
        else {
            return [undefined, null];
        }
    }

    exports.default = tryit;
    exports.tryit = tryit;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tryit.umd.js.map
