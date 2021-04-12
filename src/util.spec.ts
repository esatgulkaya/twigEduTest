import groupArrayElements from "./util";
import { CHUCK_COUNT_PARAM_ERROR } from "./constants";

describe("Util - groupArrayElements test", () => {
  test("Array with one remainder", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("Array with no remainder", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("Array with divider 1", () => {
    const result = groupArrayElements([1, 2, 3, 4, 5, 6], 1);
    expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  test("Array with 1 item chunks", () => {
    const result = groupArrayElements([1, 2, 3, 4], 4);
    expect(result).toEqual([[1], [2], [3], [4]]);
  });

  test("Divider is bigger than array length", () => {
    const result = groupArrayElements([1, 2, 3, 4], 6);
    expect(result).toEqual([[1], [2], [3], [4]]);
  });

  test("Array with mixed types", () => {
    const result = groupArrayElements(["test", 2, 3, 4, 5, 6], 3);
    expect(result).toEqual([
      ["test", 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("Empty array", () => {
    const result = groupArrayElements([], 3);
    expect(result).toEqual([]);
  });

  test("Array with zero divider, should throw error", () => {
    expect(() => groupArrayElements([1, 2, 3, 4, 5, 6], 0)).toThrow(
      CHUCK_COUNT_PARAM_ERROR
    );
  });

  test("Array with negative divider, should throw error", () => {
    expect(() => groupArrayElements([1, 2, 3, 4, 5, 6], -3)).toThrow(
      CHUCK_COUNT_PARAM_ERROR
    );
  });

  test("Array with non-integer divider, should throw error", () => {
    expect(() => groupArrayElements([1, 2, 3, 4, 5, 6], 1.3)).toThrow(
      CHUCK_COUNT_PARAM_ERROR
    );
  });
});
