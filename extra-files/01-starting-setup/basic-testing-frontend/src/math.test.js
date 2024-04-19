import {it, expect} from "vitest";

import {add} from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 2];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of contains string representations of numbers", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
  expect(result).toBe(expectedResult)
});
