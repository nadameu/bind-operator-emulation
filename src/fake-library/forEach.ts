export const forEach = Symbol();

declare global {
  interface Array<T> {
    [forEach](f: (_: T) => void): void;
  }
}

Array.prototype[forEach] = Array.prototype.forEach;
