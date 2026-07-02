// https://leetcode.com/problems/intersection-of-two-arrays/?envType=problem-list-v2&envId=binary-search

function intersection(nums1: number[], nums2: number[]): number[] {
    let setIntersection: Set<number> = new Set();
    const arrayOne: number[] = nums1.sort((a, b) => a - b);
    const arrayTwo: number[] = nums2.sort((a, b) => a - b);

    for (let i: number = 0; i <= arrayOne.length - 1; i++) {
      let low: number = 0;
      let high: number = arrayTwo.length - 1;

      while (low <= high) {
        let midPosition: number = Math.floor((high + low) / 2);

        if (arrayTwo[midPosition] === arrayOne[i]){
          setIntersection.add(arrayTwo[midPosition]);
          break;
        } else if (arrayTwo[midPosition] > arrayOne[i]){
          high = midPosition - 1;
        } else {
          low = midPosition + 1;
        }
      }
    }

    return [...setIntersection];
};

console.log(intersection([4,9,5],[9,4,9,8,4]));