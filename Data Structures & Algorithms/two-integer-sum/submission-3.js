class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n1= new Map();
        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i];
            if(n1.has(diff)){
                return [n1.get(diff), i] 
            }
            n1.set(nums[i], i);
        }
        return [];

    }
}
