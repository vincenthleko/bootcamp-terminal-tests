import assert from "assert";
import { countRegNumber } from "../countRegNumber.js";

describe("The countRegNumber function", function () {
  it("should return number of registration", function () {
    var regCount = countRegNumber("CA 182736,CY 523519,CJ 812328");
    assert.equal(regCount, 3);
  });
  it("should return number of registration", function () {
    var regCount = countRegNumber("CA 182736");
    assert.equal(regCount, 1);
  });
});
