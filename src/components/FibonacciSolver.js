export default class FibonacciSolver {
  constructor() {
    this._known = [0, 1, 1, 2];
  }

  /**
   *  returns the nth fibonacci number
   *  @param {number} theNumber
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

  _solveFibonacciUpto(aNumber) {
    while (this._known[this._known.length - 1] < aNumber) {
      this._solve(this._known.length);
    }
  }

  _isNumberInFibSequence(value) {
    return this._known.indexOf(value) > -1;
  }

  /**
   *
   * @param {string|number} value
   * @return {Promise<boolean>}
   */
  checkValue(value) {
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
