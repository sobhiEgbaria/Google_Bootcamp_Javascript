// leetcode Problems coding
//https://leetcode.com/problems/two-sum/

let nums = [2, 7, 11, 15],
  target = 9;

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      let sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};
twoSum(nums, target);
