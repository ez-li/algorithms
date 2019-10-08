/**
 * 
 * You are given a list of numbers, and a target number k. Return whether 
 * or not there are two numbers in the list that add up to k.

Example:
Given [4, 7, 1 , -3, 2] and k = 5,
return true since 4 + 1 = 5.

def two_sum(list, k):
  # Fill this in.

print two_sum([4,7,1,-3,2], 5)
 */

const two_sum = (array,k) => {
    const pairs = {};
    for (var i = 0; i < array.length; i ++) {
        const needed = k - array[i];
        if (!pairs[needed]) {
            pairs[array[i]] = needed;
        } else {
            return true;
        }
    }
    return false;
}

var x = two_sum([4, 7, 1 , -3, 2], 5);
console.log(x)




