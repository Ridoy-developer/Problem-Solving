let keys = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
let values = [1, 5, 10, 50, 100, 500, 1000, 4, 9, 40, 90, 400, 900];

var romanToInt = function(str) {
    let sum = 0;
    let charStore = [];
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        charStore.push(char);
    }
    
    for (let j = 0; j < (charStore.length-1); j++) {
        let checkTwo = charStore[j] +charStore[j+1];
        let indices = keys.indexOf(checkTwo);

        if (indices !== -1) {
            sum = sum + values[indices];
            arr.push(charStore[j]);
            arr.push(charStore[j+1]);
        }
        
    }
    
    /* ----------------- reomove checkedtwo (cm, mc, xl) from array ------------------- */
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < charStore.length; j++) {
            if (arr[i] == charStore[j]) {
                charStore.splice(j, 1);
                break;
            }
        }
    }

    for (let i = 0; i < charStore.length; i++) {
        let indices = keys.indexOf(charStore[i]);
        sum = sum + values[indices];
    }  
    return sum;
};

console.log(romanToInt("MMCCCXCIX"));
