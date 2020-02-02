function mostFreqChar(string) {
    if(string ===''){
        return '';
    }
    let charsOccurrences;
    string = string.toLowerCase();
    charsOccurrences = getCharsOccurrences(string); 
    let [char] = findMaxValue(charsOccurrences);
    return char;
}

function getCharsOccurrences(string) {
    let charsOccurrences = {};
    for (let char of string) {
        if (charsOccurrences[char] == undefined) {
            charsOccurrences[char] = 1;
        } else {
            charsOccurrences[char]++;
        }
    }
    return charsOccurrences;
}

function findMaxValue(obj) {
    let maxVal;
    let maxKey;
    for (const key in obj) {
        let val = obj[key];

        if (!obj.hasOwnProperty(key)) continue;
        if (!Number.isInteger(val)) continue;

        if (maxVal == undefined || maxVal < val) {
            maxVal = val;
            maxKey = key;
        }
    }
    return [maxKey, maxVal];
}

exports.mostFreqChar = mostFreqChar;
exports.getCharsOccurrences = getCharsOccurrences;
exports.findMaxValue = findMaxValue;