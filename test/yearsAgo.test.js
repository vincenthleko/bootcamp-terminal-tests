import assert from "assert";
import { yearsAgo } from "../yearsAgo.js";

describe("The yearsAgo function", function () {
    it("should return 48 years ago", function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        
    });

     it("should return 24 years ago", function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});



