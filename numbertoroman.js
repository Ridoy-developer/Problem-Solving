let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var intToRoman = function(num) {
    let str = "";
    let collectedNum = [];

    for (let i = 0; i < keys.length; i++) {
        if ((num / keys[i]) >= 1) {
            num = num - keys[i];
            collectedNum.push(keys[i]);
            i--;
        }
    }

    
    for (let j = 0; j < collectedNum.length; j++) {
        let valueIndex = keys.indexOf(collectedNum[j]);
        str = str.concat(values[valueIndex]);
    }

    return str;
};

console.log(intToRoman(537));