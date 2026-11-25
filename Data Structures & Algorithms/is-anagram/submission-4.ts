class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();
        if (s.length !== t.length) return false;
        this.countOccurances(s, sMap);
        this.countOccurances(t, tMap);

        for (const [key, value] of sMap) {
            if (!tMap.has(key) || tMap.get(key) !== value) {
                return false;
            }
        }

        return true;
    }

    countOccurances(str: string, container: any) {
        for (let i = 0; i < str.length; i++) {
            if (container.has(str[i])) {
                container.set(str[i], (container.get(str[i])+1));
            }else{
                container.set(str[i], 1);
            }
            
        }
    }
}
