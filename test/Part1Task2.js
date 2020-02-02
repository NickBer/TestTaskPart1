const chai = require('chai');
const expect = chai.expect;
const {
    urlToObj,
    urlToObjVanilla
} = require('../Part 1/Task 3.js');

describe('urlToObj function', () => {
    it('on "" throws', () => {
        expect(()=>urlToObj('')).throws();
    });
    it('on "http://site.com/" returns {}', () => {
        expect(urlToObj("http://site.com/")).to.eql({});
    });
    it('on "http://site.com/?" returns {}', () => {
        expect(urlToObj("http://site.com/?")).to.eql({});  
    });
    it('on "http://site.com/?a=1" returns {"a":"1"}', () => {
        expect(urlToObj("http://site.com/?a=1")).to.eql({"a":"1"});  
    });
    it('on "http://site.com/?a=1&b=2" returns {"a":"1","b":"2"}', () => {
        expect(urlToObj("http://site.com/?a=1&b=2")).to.eql({"a":"1","b":"2"});  
    });
    it('on "http://site.com/?a=1&a=2" returns {"a":["1","2"]}', () => {
        expect(urlToObj("http://site.com/?a=1&a=2")).to.eql({"a":["1","2"]});  
    });
    it('on "http://site.com/?a=1&a=" returns {"a":"1"}', () => {
        expect(urlToObj("http://site.com/?a=1&a=")).to.eql({"a":"1"});  
    });
    it('on "http://site.com/?a=1&a" returns {"a":"1"}', () => {
        expect(urlToObj("http://site.com/?a=1&a")).to.eql({"a":"1"});  
    });
    it(`on "http://localhost:63342/test/index.html?em=world&ew=book" returns 
    {
        "em" : "world",
        "ew" : "book"
    }`, () => {
        expect(urlToObj("http://localhost:63342/test/index.html?em=world&ew=book")).to.eql({
            "em": "world",
            "ew": "book"
        });

    });
});

describe('urlToObjVanilla function', () => {
    it('on "" throws', () => {
        expect(()=>urlToObjVanilla('')).throws();
    });
    it('on "http://site.com/" returns {}', () => {
        expect(urlToObjVanilla("http://site.com/")).to.eql({});
    });
    it('on "http://site.com/?" returns {}', () => {
        expect(urlToObjVanilla("http://site.com/?")).to.eql({});  
    });
    it('on "http://site.com/?a=1" returns {"a":"1"}', () => {
        expect(urlToObjVanilla("http://site.com/?a=1")).to.eql({"a":"1"});  
    });
    it('on "http://site.com/?a=1&b=2" returns {"a":"1","b":"2"}', () => {
        expect(urlToObjVanilla("http://site.com/?a=1&b=2")).to.eql({"a":"1","b":"2"});  
    });
    it('on "http://site.com/?a=1&a=2" returns {"a":["1","2"]}', () => {
        expect(urlToObjVanilla("http://site.com/?a=1&a=2")).to.eql({"a":["1","2"]});  
    });
    it('on "http://site.com/?a=1&a=" returns {"a":"1"}', () => {
        expect(urlToObjVanilla("http://site.com/?a=1&a=")).to.eql({"a":"1"});  
    });
    it('on "http://site.com/?a=1&a" returns {"a":"1"}', () => {
        expect(urlToObjVanilla("http://site.com/?a=1&a")).to.eql({"a":"1"});  
    });
    it(`on "http://localhost:63342/test/index.html?em=world&ew=book" returns 
    {
        "em" : "world",
        "ew" : "book"
    }`, () => {
        expect(urlToObjVanilla("http://localhost:63342/test/index.html?em=world&ew=book")).to.eql({
            "em": "world",
            "ew": "book"
        });

    });
});