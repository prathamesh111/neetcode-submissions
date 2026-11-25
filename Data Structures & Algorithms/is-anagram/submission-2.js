class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let str1 = s.toLowerCase().split("");
        let str2 = t.toLowerCase().split("");

        if(str1.length != str2.length) return false;

        const str1Map = new Map();
         const str2Map = new Map();

        for(let i=0; i<str1.length; i++){
            if(str1Map.has(str1[i])){
                str1Map.set(str1[i],str1Map.get(str1[i]) + 1 );
            }else{
                str1Map.set(str1[i], 1);
            }

            if (str2Map.has(str2[i])) {
                str2Map.set(str2[i], str2Map.get(str2[i]) + 1);
            } else {
                str2Map.set(str2[i], 1);
            }
        }

        for(let [char, count] of str1Map){
            if(!str2Map.has(char) || str2Map.get(char) != count){
                return false;
            }
        }
        return true;

    }
}
