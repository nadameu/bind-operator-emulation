export const map = Symbol();

declare global {
  interface Array<T> {
    [map]<U>(f: (x: T, i: number, xs: T[]) => U): Array<U>;
  }
}

Array.prototype[map] = Array.prototype.map;
