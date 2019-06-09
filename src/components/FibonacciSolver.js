export default class FibonacciSolver {
  constructor() {
    this._known = [0, 1, 1, 2];
  }

  /**
   *  returns the nth fibonacci number
   *  @param {number} n
   *  @return {number}
   */
  _solve(n) {
    if (this._known[n]) {
      return this._known[n];
    }
    const value = this._solve(n - 1) + this._solve(n - 2);
    this._known[n] = value;
    return value;
  }

  /**
   * find fib numbers until the largest number is at least the given number
   * @param {number} value
   */
  _solveFibonacciUpto(value) {
    while (this._known[this._known.length - 1] < value) {
      this._solve(this._known.length);
    }
  }

  /**
   * Check for a given number in the set of known fib numbers
   * O(n)
   * @param {number} value
   */
  _isNumberInFibSequence(value) {
    return this._known.indexOf(value) > -1;
  }

  /**
   * @param {string|number} value
   * @return {Promise<boolean>}
   */
  checkIsFibonacciNumber(value) {
    return new Promise((resolve, reject) => {
      const valAsNumber = parseInt(value, 10);

      if (!Number.isSafeInteger(valAsNumber)) {
        return reject();
      }

      this._solveFibonacciUpto(valAsNumber);
      const isFibonacci = this._isNumberInFibSequence(valAsNumber);

      resolve(isFibonacci);
    });
  }
}
