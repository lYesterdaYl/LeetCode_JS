/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = {};
    let i = 0;
    for(let num of nums){
        let num2 = target - num;
        if (num2 in result){
            return [i, result[num2]]
        }
        result[num] = i;
        i++;
    }
};

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums, target));
