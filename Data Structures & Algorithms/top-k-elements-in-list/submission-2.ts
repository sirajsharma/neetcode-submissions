class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();
        const freqBucket = new Array(nums.length + 1).fill(undefined);
        const kValues = [];

        for (const num of nums) {
            if (freqMap.has(num)) {
                const count = freqMap.get(num);
                freqMap.set(num, count+1);
            } else {
                freqMap.set(num, 1);
            }
        }

        const freqMapArr = [...freqMap.entries()];
        
        for (let i = 0; i<freqMapArr.length; i++) {
            const fr = freqMapArr[i];
            if (!freqBucket[fr[1]]) {
                freqBucket[fr[1]] = [fr[0]];
            } else {
                freqBucket[fr[1]].push(fr[0])
            }
        }

        for (let i = freqBucket.length - 1; i>=0; i--) {
            if (kValues.length === k) break;

            if (freqBucket[i] && freqBucket[i].length) {
                kValues.push(...freqBucket[i]);
            }
        }

        return kValues;
    }
}
