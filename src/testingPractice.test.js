import { capitalize, reverse, calculator, caesar, analyzeArray } from "./testingPractice.js";

test('capitalizes the first letter in the string "cat"', () => {
  expect(capitalize("cat")).toBe("Cat");
});

test('capitalizes the first letter in the string "dog"', () => {
  expect(capitalize("dog")).toBe("Dog");
});

test('capitalizes the first letter in the string "iguana"', () => {
  expect(capitalize("iguana")).toBe("Iguana");
});

test('reverses the string "hello"', () => {
  expect(reverse("hello")).toBe("olleh");
});

test('reverses the string "Zangief"', () => {
  expect(reverse("Zangief")).toBe("feignaZ");
});

test('reverses the string "Joe Biden"', () => {
  expect(reverse("Joe Biden")).toBe("nediB eoJ");
});

test("adds 1 + 4 to equal 5", () => {
  expect(calculator.add(1, 4)).toBe(5);
});

test("subtracts 3 from 7 to equal 4", () => {
  expect(calculator.subtract(7, 3)).toBe(4);
});

test("divides 18 by 6 to equal 3", () => {
  expect(calculator.divide(18, 6)).toBe(3);
});

test("multiplies 8 by 5 to equal 40", () => {
  expect(calculator.multiply(8, 5)).toBe(40);
});

test('encodes the string "Cat" with a caesar cipher using shift factor 3 to be "fdw"', () => {
  expect(caesar("Cat", 3)).toBe("Fdw");
});

test('encodes the string "Hello, world!" with a caesar cipher using shift factor 6 to be ""', () => {
  expect(caesar("Hello, world!", 6)).toBe("Nkrru, cuxrj!");
});

test('encodes the string "I am... almighty!" with a caesar cipher using shift factor 4 to be ""', () => {
  expect(caesar("I am... almighty!", 4)).toBe("M eq... epqmklxc!");
});

test('analyzes the array [1,8,3,4,2,6] and provides an average of 4, min of 1, max of 8, and length of 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        "average": 4,
        "min": 1,
        "max": 8,
        "length": 6,
    })
});

test('analyzes the array [10,5,25,30,40,20,10,20] and provides an average of 20, min of 5, max of 40, and length of 8', () => {
    expect(analyzeArray([10,5,25,30,40,20,10,20])).toStrictEqual({
        "average": 20,
        "min": 5,
        "max": 40,
        "length": 8,
    })
});