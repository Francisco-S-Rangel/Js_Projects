// function searchInsert(nums: number[], target: number): number {
//     let left: number = 0;
//     let right: number = nums.length -1;

//     while (left <= right) {
//         if (nums[left] === target) {
//             return left;
//         } else if (nums[right] === target) {
//             return right;
//         } else if(nums[right] < target) {
//             return right + 1;
//         } else if(nums[left] > target) {
//             return left;
//         } else if(left + 1 === right) {
//             return left + 1;
//         }
        
//         left++; right--;
//     }

//     return 0;
// }

function searchInsertImproved(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length -1;

    while (left <= right) {
        let center: number = left + Math.floor((right - left) / 2);

        if (nums[center] === target) {
            return center;
        } else if (nums[center] < target) {
            left = center + 1;
        } else {
            right = center -1;
        }

        if (left > right) {
            return left;
        }
    }

    return 0;
}

console.log(searchInsertImproved([1,3,5,6], 5));
console.log(searchInsertImproved([1,3,5,6], 2));
console.log(searchInsertImproved([1,3,5,6], 7));
console.log(searchInsertImproved([1,3], 2));
