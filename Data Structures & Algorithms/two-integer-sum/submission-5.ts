class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

      const seen = new Map<number, number>();
        for(let i=0; i < nums.length ;i++){
            const compliment : number = target - nums[i];
            const moreIndex : number | undefined = seen.get(compliment);
            if(moreIndex !== undefined){
                return [i, moreIndex]
            }
            seen.set(nums[i],i);
        }

        return [];


    }
}
