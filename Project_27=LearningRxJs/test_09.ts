// function permute(nums: number[]): number[][] {
//     let permuteArray: number[][] = [];

//     // for (let i: number = 0; i < nums.length; i++) {
//     //     let aulixiarArray: number[] = [];
//     //     for (let j: number = i; j < nums.length; j++) {
//     //         aulixiarArray.push(nums[j]);
//     //     }
//     //     permuteArray.push(aulixiarArray);
//     // }

//     let counter: number = 0;
//     while (counter < nums.length) {
//         let aulixiarArray: number[] = [];
//         for (let i: number = 0; i < nums.length; i++) {
//             if (i === counter) {
//                 aulixiarArray.push(nums[counter]);
//             } else {
//                 aulixiarArray.push(nums[i]);
//             }
//         }

//         permuteArray.push(aulixiarArray);
//         counter++;
//     }

//     return permuteArray;
// }

function permute(nums: number[]): number[][] {
    return [];
};

console.log(permute([1,2,3]));
// console.log(permute([0,1]));
// console.log(permute([1]));

// https://leetcode.com/problems/permutations/description/
https://leetcode.com/problems/add-binary/description/