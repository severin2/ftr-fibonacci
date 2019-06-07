import FibonacciSolver from './FibonacciSolver';

describe('the fibonacci solver', () => {

  it('constructs successfully', () => {
    expect(new FibonacciSolver()).toBeTruthy();
  });

  describe('the checkIsFibonacciNumber function', () => {
    let solver;

    beforeEach(() => {
      solver = new FibonacciSolver();
    });

    it('returns a promise', () => {
      expect(solver.checkIsFibonacciNumber(1)).toBeInstanceOf(Promise);
    });

    it('correctly evaluates fibonacci numbers', async () => {
      expect(await solver.checkIsFibonacciNumber(0)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(1)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(2)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(3)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(5)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(8)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(13)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(21)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(34)).toBe(true);
      expect(await solver.checkIsFibonacciNumber(317811)).toBe(true);

      expect(await solver.checkIsFibonacciNumber(4)).toBe(false);
      expect(await solver.checkIsFibonacciNumber(6)).toBe(false);
      expect(await solver.checkIsFibonacciNumber(7)).toBe(false);
      expect(await solver.checkIsFibonacciNumber(9)).toBe(false);
      expect(await solver.checkIsFibonacciNumber(10)).toBe(false);
      expect(await solver.checkIsFibonacciNumber(317812)).toBe(false);
    });

    it('maintains a list of known fibonacci numbers', async () => {

      expect(Array.isArray(solver._known)).toBe(true);

      expect(solver._known.length).toBe(4);
      expect(solver._known[solver._known.length - 1]).toBe(2);

      expect(await solver.checkIsFibonacciNumber(12586269025)).toBe(
        true
      );

      expect(solver._known[solver._known.length - 1]).toBe(
        12586269025
      );
      expect(solver._known.length).toBe(51);
    });

  });
});
