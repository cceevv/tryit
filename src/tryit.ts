export type TryitSuccess<T> = [T, null];
export type TryitFailure<U = Error> = [undefined, U];
export type TryitResult<T, U = Error> = TryitSuccess<T> | TryitFailure<U>;

export function tryit<T, U = Error>(func: () => T): TryitResult<T, U>;
export function tryit<T, U = Error>(
  func: () => PromiseLike<T>,
): Promise<TryitResult<T, U>>;

export function tryit<T, U = Error>(
  func: () => T | PromiseLike<T>,
): TryitResult<T, U> | Promise<TryitResult<T, U>> {
  if (typeof func !== "function") {
    throw new TypeError("tryit expects a function");
  }

  try {
    const result = func();
    return isPromiseLike(result) ? toPromiseResult<T, U>(result) : [result, null];
  } catch (err: unknown) {
    return [undefined, err as U];
  }
}

function isPromiseLike<T>(value: unknown): value is PromiseLike<T> {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return typeof (value as { then?: unknown }).then === "function";
}

async function toPromiseResult<T, U = Error>(
  promise: PromiseLike<T>,
): Promise<TryitResult<T, U>> {
  return Promise.resolve(promise)
    .then<TryitSuccess<T>>((data) => [data, null])
    .catch<TryitFailure<U>>((err: unknown) => [undefined, err as U]);
}

export default tryit;
