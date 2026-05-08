type TryitSuccess<T> = [T, null];
type TryitFailure<U = Error> = [undefined, U];
type TryitResult<T, U = Error> = TryitSuccess<T> | TryitFailure<U>;
declare function tryit<T, U = Error>(func: () => T): TryitResult<T, U>;
declare function tryit<T, U = Error>(func: () => PromiseLike<T>): Promise<TryitResult<T, U>>;

export { type TryitFailure, type TryitResult, type TryitSuccess, tryit as default, tryit };
