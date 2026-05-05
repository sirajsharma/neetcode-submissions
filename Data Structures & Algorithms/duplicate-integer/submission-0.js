class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqMap = new Map();

        for (let i = 0; i<nums.length; i++) {
            if (freqMap.has(nums[i])) return true;

            freqMap.set(nums[i], true);
        }

        return false;
    }
}
