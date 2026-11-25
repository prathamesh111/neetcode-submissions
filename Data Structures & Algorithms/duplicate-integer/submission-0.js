class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myNums = new Set();
        for(let num of nums){
            if(myNums.has(num)){
                return true;
            }
            myNums.add(num);  
        }
        return false
        
    }

    
}
