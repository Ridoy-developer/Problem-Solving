/**
 * @param {number[]} nums
 * @param {5} target
 * @return {number[]}
 */
 
let arr = [7, 1, 10, 15, 4, 3];
let target = 10;

var twoSum = function(arr, target) {
    let indices = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let addResult;

            if (i == j) {
                continue;
            } else {
                addResult = arr[i] + arr[j];
            }

            if (addResult == target) {
                indices.push(i, j);
                return indices;
            }
        }
    }
}

let res = twoSum(arr, target);
console.log(res);
