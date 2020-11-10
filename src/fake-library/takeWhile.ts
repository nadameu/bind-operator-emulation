export const takeWhile = Symbol();

declare global {
  interface Array<T> {
    [takeWhile](predicate: (_: T) => boolean): T[];
  }
}

Array.prototype[takeWhile] = function takeWhile(predicate) {
  const result = [];
  for (const x of this) {
    if (predicate(x)) {
      result.push(x);
    } else break;
  }
  return result;
};
