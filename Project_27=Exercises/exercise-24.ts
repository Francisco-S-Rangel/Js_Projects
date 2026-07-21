// https://leetcode.com/problems/sort-colors/

// with Bubble Sort algorithm
function sortColors(nums: number[]): void {
    for (let i: number = 0; i < nums.length - 1; i++) {
        let swapped: boolean = false;
        for (let j: number = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swapped = true;
                let aux: number = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = aux;
            }
        }

        if (!swapped)
            break;
    }

    console.log(nums);
}

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));

// with Dutch National Flag algorithm
function sortColors2(nums: number[]): void {
    let low: number = 0;
    let mid: number = 0;
    let high: number = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            let aux: number = nums[mid];
            nums[mid] = nums[low];
            nums[low] = aux;
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else {
            let aux2: number = nums[mid];
            nums[mid] = nums[high];
            nums[high] = aux2;
            high--;
        }
    }

    console.log(nums);
}

console.log(sortColors2([2,0,2,1,1,0]));
console.log(sortColors2([2,0,1]));
