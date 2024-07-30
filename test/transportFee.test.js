import assert from "assert";
import { transportFee } from "../transportFee.js";

describe("The transportFee function", function () {
  it("should return the R20 amount", function () {
    assert.equal(transportFee("morning"), "R20");
  });

  it("should return the R10 amount", function () {
    assert.equal(transportFee("afternoon"), "R10");
  });

  it("should return free", function () {
    assert.equal(
      transportFee("nightshift"),
      "free",
      "for night shift return free"
    );
  });

  
});
