// https://leetcode.com/problems/intersection-of-two-arrays/?envType=problem-list-v2&envId=binary-search

function intersection(nums1: number[], nums2: number[]): number[] {
    let intersectionArray: number[] = [];
    const midPostionOne = Math.floor((nums1.length - 1)/2);
    const midPostionTwo = Math.floor((nums2.length - 1)/2);
    const midArrayOne = nums1[midPostionOne];
    const midArrayTwo = nums2[midPostionTwo];

    console.log(midArrayOne, midArrayTwo);

    if(midArrayOne)
        intersectionArray.push(midArrayOne);

    if(midArrayTwo && (midArrayTwo !== midArrayOne))
        intersectionArray.push(midArrayTwo);

    return intersectionArray;
}

console.log(intersection([4,9,5],[9,4,9,8,4]));