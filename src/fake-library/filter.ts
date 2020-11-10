export const filter = Symbol();

declare global {
  interface Array<T> {
    [filter](p: (x: T, i: number, xs: T[]) => boolean): Array<T>;
  }
}

Array.prototype[filter] = Array.prototype.filter;
