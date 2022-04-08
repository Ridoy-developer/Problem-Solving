let strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = "";
    
    // base condition
    if (strs.length <= 0) {
        return longestCommonPrefix;
    } else if (strs.length == 1) {
        return strs[0];
    }

    // find the minimum length of an string from an array
    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minimumLength = Math.min(minimumLength, strs[i].length);
    }


    // find the minimum length string index from array
    let indiceOfString;
    for (let i = 0; i < strs.length; i++) {
        if (minimumLength == strs[i].length) {
            indiceOfString = strs[i];
        }
    }

    // finding the common prefix
    for (let i = 0; i < minimumLength; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (indiceOfString[i] !== strs[j][i]) {
                return longestCommonPrefix;
            }
            
            if (j == (strs.length - 1)) {
                longestCommonPrefix = longestCommonPrefix.concat(indiceOfString[i]);
            }
        }
    }

    return longestCommonPrefix;

};

console.log(longestCommonPrefix(strs));