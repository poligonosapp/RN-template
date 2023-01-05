// https://jestjs.io/docs/getting-started#using-typescript

import { describe, expect, test } from "@jest/globals";
import { sum , fetchData } from "./sum";

test('the data is peanut butter', () => {
  return fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  });
});

// jest promise https://jestjs.io/docs/asynchronous
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// jest async await https://jestjs.io/docs/asynchronous
test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

