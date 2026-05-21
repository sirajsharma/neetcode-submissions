class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();

        for (const num of nums) {
            if (freqMap.has(num)) {
                const count = freqMap.get(num);
                freqMap.set(num, count+1);
            } else {
                freqMap.set(num, 1);
            }
        }

        return [...freqMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(entery => entery[0]);
    }
}
