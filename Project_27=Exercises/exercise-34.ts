// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let mappedValues = new Map<number, number>();
    let positionOfSum: number[] = [];

    nums.forEach((number, index) => {
        let missingNumber = target - number;
        if(mappedValues.has(missingNumber)) {
            positionOfSum = [mappedValues.get(missingNumber) as number, index];
        }
        mappedValues.set(number, index);
    })

    return positionOfSum;
};

const nums: number[] = [2,7,11,15]; 
const target: number = 9;

function twoSum2(nums: number[], target: number): number[] {
    let mappedPositions: Map<number, number> = new Map();

    for (let i: number = 0; i < nums.length; i++) {
        const missing: number = target - nums[i];
        if (mappedPositions.has(missing))
            return [mappedPositions.get(missing) as number, i];

        mappedPositions.set(nums[i], i);
    }

    return [];
}

console.log(twoSum2(nums, target));