// function removeDuplicates(nums: number[]): number {
//     let duplicatedValues = new Set<number>(nums);
//     let duplicatedArray = [...duplicatedValues];

//     for(let i: number = 0; i < nums.length; i++) {
//         if (i >= duplicatedArray.length) {
//             nums[i] = 0;
//         } else {
//             nums[i] = duplicatedArray[i];
//         }
//     }

//     console.log(nums);

//     return duplicatedArray.length;
// };

// function removeDuplicates(nums: number[]): number {
//     let duplicatedArray: number[] = [];

//     for (let i: number = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i-1]) {
//             duplicatedArray.push(nums[i]);
//         }
//     }

//     for (let i: number = 0; i < nums.length; i++) {
//         if (i >= duplicatedArray.length) {
//             nums[i] = 0;
//         } else {
//             nums[i] = duplicatedArray[i];
//         }
//     }

//     return duplicatedArray.length;
// };

console.log(removeDuplicates([1,1,2]));

function removeDuplicates(nums: number[]): number {
    let length: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[length] = nums[i];
            length++;
        }
    }

    return length;
};

// removeDuplicates([1,1,2]);
// console.log(removeDuplicates([1,1,2]))

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));