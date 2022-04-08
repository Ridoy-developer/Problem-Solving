let arr = [-2, 1, 3, 7, 15, 111];
let target = 8;

var search = function(nums, target) {
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] == target) {
           return i;
        } else if (i == (nums.length - 1)) {
           return -1;
       }
   }
};

console.log(search(arr, target));