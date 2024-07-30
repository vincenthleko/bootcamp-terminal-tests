import assert from "assert";
import {isFromBellville} from "../isFromBellville.js";

describe('The isFromBellville function', function(){

    it('should return true', function(){
        assert.equal(isFromBellville('CY 123'), true);
        
    });
    it('should return false', function(){
        assert.equal(isFromBellville('CJ 123'), false);
        
    });
});


