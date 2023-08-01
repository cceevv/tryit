export declare function tryit<T, U = Error>(func: (() => T)): [T, U];
export declare function tryit<T, U = Error>(func: (() => Promise<T>)): Promise<[T, U]>;
export declare function tryit<T, U = Error>(promise: Promise<T>): Promise<[T, U]>;
export default tryit;
