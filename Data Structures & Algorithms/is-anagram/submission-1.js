class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split("");
        const s2 = t.split("");
        const s1Map = new Map();
        const s2Map = new Map();

        if(s2.length != s1.length){
            return false;
        }

        for(let item of s1){
            if(s1Map.get(item) >= 1){
                s1Map.set(item, s1Map.get(item)+1);
            }else{
                s1Map.set(item,1)
            }
        }

        for(let item of s2){
            if(s2Map.get(item) >= 1){
                s2Map.set(item, s2Map.get(item)+1);
            }else{
                s2Map.set(item,1)
            }
        }

        for(let [key, value] of s2Map){
            if(!(s1Map.has(key))){
                return false;
            }

            if(s1Map.get(key) != s2Map.get(key)){
                return false
            }
        
        }
        return true;


    }
}
