// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
    const length: number = digits.length - 1;
    let newDigits: number[] = [];

    if (digits[length] === 9) {
        let nineInArray: number = 0;
        for (let i: number = length; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i] = digits[i] + 1;
                return digits;
            } else {
                digits[i] = 0;
                nineInArray++;
            }
        }

        if (nineInArray === digits.length)
            newDigits = [1, ...digits];
    } else {
        digits[length] += 1;
        newDigits = digits;
    }

    return newDigits;
}

let digitTest = [9, 9, 9 ];
console.log(plusOne(digitTest));

let digitTest2 = [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9];
console.log(plusOne(digitTest2));

let digitTest3 = [9,8,9];
console.log(plusOne(digitTest3));

// 99899
// 989 -990
// 979 -980