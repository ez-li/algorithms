/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

 */
 
var twoSum = function(nums, target) {
    var storage = {};
    for (var i = 0; i < nums.length; i ++) {
        var sumDiff = target - nums[i];
        if (!storage[nums[i]]) {
            storage[nums[i]] = [sumDiff, i];
        }
        if (storage[sumDiff] && storage[sumDiff][0] === nums[i]) {
            return [i, storage[sumDiff][1]];
        }
    }
};


// var nums = [2,7,11,15];
// var x = twoSum(nums, 9);
// console.log(x);

