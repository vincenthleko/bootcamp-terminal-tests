import assert from "assert";
import { countAllFromTown } from "../countAllFromTown.js";

describe("The countAllFromTown function", function () {
  it("should return a number", function () {
    var fromStellies = countAllFromTown(
      "CL 124,CY 567,CL 345, CJ 456,CL 341",
      "CL"
    );
    assert.equal(fromStellies, 3);
  });
  it("should return a number", function () {
    var fromKuilsriver = countAllFromTown(
      "CJ 124,CY 567,CL 345, CF 456, CL 341",
      "CF"
    );
    assert.equal(fromKuilsriver, 1);
  });
});
