import assert from "assert";
import { isWeekday } from "../isWeekday.js";

describe("The isWeekday function", function () {
  it("should return true", function () {
    assert.equal(isWeekday("Monday"), true);
    assert.equal(isWeekday("Tuesday"), true);
    assert.equal(isWeekday("Wednesday"), true);
    assert.equal(isWeekday("Thursday"), true);
    assert.equal(isWeekday("Friday"), true);
  });
  it("should return false", function () {
    assert.equal(isWeekday("Saturday"), false);
    assert.equal(isWeekday("Sunday"), false);
  });
});
