class Solution {

    checkAnagram(str1: string, str2: string): boolean {
        const count = new Array(26).fill(0);

        for (let i = 0; i<str1.length; i++) {
            count[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return count.every(val => val === 0);
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups: string[][] = [];
        const strMap = new Map<string, boolean>();

        for (let i = 0; i<strs.length; i++) {
            if (strMap.has(strs[i])) continue;

            const group = [strs[i]];
            strMap.set(strs[i], true);

            for (let j = i + 1; j<strs.length; j++) {
                if (strs[i].length !== strs[j].length) {
                    continue;
                } else if (this.checkAnagram(strs[i], strs[j])) {
                    group.push(strs[j]);
                    strMap.set(strs[j], true);
                }
            }

            groups.push(group);
        }

        return groups;
    }
}
