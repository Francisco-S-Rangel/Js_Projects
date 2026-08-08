// https://leetcode.com/problems/find-missing-elements/description/

function findMissingElements(nums: number[]): number[] {
    const length: number = nums.length;
    const sorted: number[] = nums.sort((a, b) => a - b);
    const smallest: number = sorted[0];
    const largest: number = sorted[length - 1];

    let missingElements: number[] = [];
    let aux: number = 0;

    for (let i: number = smallest; i <= largest; i++) {
        if (sorted[aux] && sorted[aux] !== i) {
            missingElements.push(i);
        } else {
            aux++;
        }
    }

    return missingElements;
}

console.log(findMissingElements([1,4,2,5]));
console.log(findMissingElements([7,8,6,9]));
console.log(findMissingElements([5,1]));

function findMissingElements2(nums: number[]): number[] {
    const sorted: number[] = nums.sort((a, b) => a - b);

    let missingElements: number[] = [];
    let aux: number = 0;

    for (let i: number = sorted[0]; i <= sorted[nums.length - 1]; i++) {
        if (nums[aux] && nums[aux] !== i) {
            missingElements.push(i);
        } else {
            aux++;
        }
    }

    return missingElements;
}

console.log(findMissingElements2([1,4,2,5]));
console.log(findMissingElements2([7,8,6,9]));
console.log(findMissingElements2([5,1]));