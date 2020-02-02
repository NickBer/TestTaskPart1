const chai = require('chai');
const expect = chai.expect;
const {
    mostFreqChar,
    getCharsOccurrences,
    findMaxValue
} = require('../Part 1/Task 1.js');

describe('mostFreqChar function', () => {
    it('on "" returns ""', () => {
        let emptyStr = mostFreqChar("");
        expect(emptyStr).equal("");
    });
    it('on "abcd" returns "a"', () => {
        let a = mostFreqChar("abcd");
        expect(a).equal('a');
    });
    it('on "abcdC" returns "c"', () => {
        let c = mostFreqChar("abcdC");
        expect(c).equal('c');
    });
});

describe('getCharsOccurrences function', () => {
    it('on "" returns {}', () => {
        expect(getCharsOccurrences("")).to.eql({});
    });
    it('on "aabbbcccc" returns {a:2,b:3,c:4}', () => {
        let res = getCharsOccurrences("aabbbcccc");
        let obj = {
            a: 2,
            b: 3,
            c: 4
        };
        expect(res).to.eql(obj);
    });
});

describe('findMaxValue function', () => {
    it('on {} returns [undefined,undefined] ', () => {
        expect(findMaxValue({})).to.eql([undefined,undefined]);
    });
    it('on {a:2,b:3,c:4} returns ["c",4]', () => {
        let obj = {
            a: 2,
            b: 3,
            c: 4
        };
        let res = findMaxValue(obj);
        expect(res).to.eql(["c",4]);
    });
});