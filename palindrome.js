
let target = 9669;

 var isPalindrome = function(target) {
    let alter = "";
    let str = target.toString();
    
    for (let i = (str.length - 1); i >= 0; i--) {
        let value = str.charAt(i);
        alter = alter.concat(value);
    }

    let reverse = parseInt(alter);
    if (target === reverse) {
        return true;
    }

    return false;
};

console.log(isPalindrome(target));