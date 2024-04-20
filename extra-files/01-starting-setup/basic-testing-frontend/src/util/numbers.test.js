import {it, expect} from "vitest";
import {transformToNumber} from "./numbers";

it("should return an integer when a string representation of number is passed", () => {
  // Arrange
  const number = "1";

  // Act
  const result = transformToNumber(number);

  // Assert
  expect(result).toBe(1);
  // more tests
  expect(result).toBe(+number);
  expect(result).toBeTypeOf("number");
});

it("should return NaN if provided invalid value", () => {
  const notNumber = "invalid";

  const result = transformToNumber(notNumber);

  expect(result).toBeNaN();
});

it.skip("should throw an error if value is already an integer", () => {
  const number = 1;

  const resultFn = () => {
    transformToNumber(number);
  };

  expect(resultFn).toThrow();
});
