// https://leetcode.com/problems/maximum-product-of-three-numbers/description/
function maximumProduct(nums: number[]): number {
    let finalProduct: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        finalProduct = finalProduct * nums[i];
    }

    return finalProduct;
}

console.log(maximumProduct([-100,-98,-1,2,3,4]));
console.log(maximumProduct([-100,-98, -1, 2, 3]));

9800
-19600
-58800
39200

function maximumProduct2(nums: number[]): number {
    const length: number = nums.length;

    if (length < 4) {
        let final: number = nums[0];

        for (let i: number = 1; i < length; i++) {
            final = final * nums[i];
        }
        
        return final;
    } else {
        const copyNums: number[] = nums.sort((a, b) => a - b);
        
        let possibility1: number = copyNums[0] * copyNums[1] * copyNums[2];
        let possibility2: number = copyNums[length - 1] * copyNums[length - 2] * copyNums[length - 3];
        let possibility3: number = copyNums[0] * copyNums[1] * copyNums[length - 1];

        return Math.max(possibility1, possibility2, possibility3);
    }
}

console.log(maximumProduct2([-100,-98,-1,2,3,4]));

function maximumProduct3(nums: number[]): number {
    const length: number = nums.length;
    const sortedNums: number[] = nums.sort((a, b) => a - b);

    return Math.max(sortedNums[0] * sortedNums[1] * sortedNums[2], 
    sortedNums[length - 1] * sortedNums[length - 2] * sortedNums[length - 3], 
    sortedNums[0] * sortedNums[1] * sortedNums[length - 1]);
}

console.log(maximumProduct3([-100,-98,-1,2,3,4]));