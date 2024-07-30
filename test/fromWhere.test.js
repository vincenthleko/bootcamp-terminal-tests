import assert from "assert";
import { fromWhere } from "../fromWhere.js";

describe("The fromWhere function", function () {
  it("should return Bellville", function () {
    assert.equal(fromWhere("CY 567489"), "Bellville");
  });

  it("should return Paarl", function () {
    assert.equal(fromWhere("CJ 343502"), "Paarl");
  });

  it("should return Cape Town", function () {
    assert.equal(fromWhere("CA 987504"), "Cape Town");
  });

  it("should return some other place!", function () {
    assert.equal(fromWhere("ZN 568593"), "Some other place!");
  });
});
