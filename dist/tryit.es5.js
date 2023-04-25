function tryit(promiseOrFunction) {
    if (promiseOrFunction instanceof Promise) {
        return promiseOrFunction
            .then(function (data) { return [data, null]; })
            .catch(function (err) { return [undefined, err]; });
    }
    else if (promiseOrFunction instanceof Function) {
        try {
            return [promiseOrFunction(), null];
        }
        catch (err) {
            return [undefined, err];
        }
    }
    else {
        return [undefined, null];
    }
}

export { tryit as default, tryit };
//# sourceMappingURL=tryit.es5.js.map
