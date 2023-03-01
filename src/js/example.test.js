import { sum } from "./example.js";

describe("sum func", () => {
  test("expect sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
