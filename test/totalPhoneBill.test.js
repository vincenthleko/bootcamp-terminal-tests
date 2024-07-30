import assert from "assert";
import { totalPhoneBill } from "../totalPhoneBill.js";

describe("The totalPhoneBill function", function () {
  it("should return total phone bill of R7.45", function () {
    assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));

  });

  it("should return total phone bill of R3.40", function () {
    assert.equal("R3.40", totalPhoneBill("call, sms"));
  });

  it("should return total phone bill of R1.30", function () {
    assert.equal("R1.30", totalPhoneBill("sms, sms"));
  });
});
