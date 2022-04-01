// @flow

function foo(x: ?number): string {
  if (x) {
    return x; // flow will complain about returning a number instead of a string.
  }
  return "default string";
}
