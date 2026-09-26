// function permute(nums: number[]): number[][] {
//     let permuteArray: number[][] = [];

    // for (let i: number = 0; i < nums.length; i++) {
    //     let aulixiarArray: number[] = [];
    //     for (let j: number = i; j < nums.length; j++) {
    //         aulixiarArray.push(nums[j]);
    //     }
    //     permuteArray.push(aulixiarArray);
    // }

//     let counter: number = 0;
//     while (counter < nums.length) {
//         let aulixiarArray: number[] = [];
//         for (let i: number = 0; i < nums.length; i++) {
//             if (i === counter) {
//                 aulixiarArray.push(nums[counter]);
//             } else {
//                 aulixiarArray.push(nums[i]);
//             }P
//         }

//         permuteArray.push(aulixiarArray);
//         counter++;
//     }

//     return permuteArray;
// }

function permute(nums: number[]): number[][] {
    let permutedArray: number[][] = [];
    
    function permutation(k: number, array: number[]) {
        if (k === 1) {
            permutedArray.push([...array]);
        } else {
            for (let i: number = 0; i < k - 1; i++) {
                permutation(k - 1, array);
                if (k % 2 === 0) {
                    let position = array[i];
                    array[i] = array[k - 1];
                    array[k - 1] = position;
                } else {
                    let position = array[0];
                    array[0] = array[k - 1];
                    array[k - 1] = position;
                }
            }

            permutation(k - 1, array);
        }
    }

    permutation(nums.length, nums);
    return permutedArray;
}

// function permutation(k: number, array: number[]): number[] {
//     if (k === 1) {
//         return array
//     } else {
//         for (let i: number = 0; i < k - 1; i++) {
//             permutation(k - 1, array);
//             if (k % 2 === 0) {
//                 let position = array[i];
//                 array[i] = array[k - 1];
//                 array[k - 1] = position;
//             } else {
//                 let position = array[0];
//                 array[0] = array[k - 1];
//                 array[k - 1] = position;
//             }
//         }
//     }
// }

console.log(permute([1,2, 3]))
console.log(permute([1,2]))

// https://leetcode.com/problems/permutations/description/