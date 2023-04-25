export function tryit<T, U = Error>(func: (() => T)): [T, U];
export function tryit<T, U = Error>(promise: Promise<T>): Promise<[T, U]>;

export function tryit<T, U = Error>(promiseOrFunction: unknown): unknown {
  if (promiseOrFunction instanceof Promise) {
    return promiseOrFunction
      .then<[T, null]>(data => [data, null])
      .catch<[undefined, U]>((err: any) => [undefined, err])
  }
  else if (promiseOrFunction instanceof Function) {
    try {
      return [promiseOrFunction(), null]
    } catch (err: any) {
      return [undefined, err]
    }
  }
  else {
    return [undefined, null]
  }
}

export default tryit