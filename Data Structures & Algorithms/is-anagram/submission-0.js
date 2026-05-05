class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freqMap = new Map();

        for (let i = 0; i<s.length; i++) {
            if (!freqMap.has(s[i])) {
                freqMap.set(s[i], 1);
            } else {
                const count = freqMap.get(s[i]);
                freqMap.set(s[i], count + 1);
            }
        }

        for (let i = 0; i<t.length; i++) {
            if (!freqMap.has(t[i])) {
                return false;
            } else if (freqMap.get(t[i]) === 0) {
                return false;
            } else {
                const count = freqMap.get(t[i]);

                freqMap.set(t[i], count - 1);
            }
        }

        return true;
    }
}
