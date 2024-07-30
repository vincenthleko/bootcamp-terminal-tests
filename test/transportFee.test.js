import assert from "assert";
import { transportFee } from "../transportFee.js";

describe("The transportFee function", function () {
  it("should return the amount", function () {
    assert.equal(transportFee("morning"), "R20");

    assert.equal(transportFee("afternoon"), "R10");

    assert.equal(
      transportFee("nightshift"),
      "free",
      "for night shift return free"
    );
  });
});
