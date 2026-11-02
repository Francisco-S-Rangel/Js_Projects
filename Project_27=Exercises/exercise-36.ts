function mySqrt(x: number): number {
    const mirror: number = x;

    for (let i: number = 0; i < mirror; i++) {
        x = (x + mirror / x) / 2;
    }

    return x - (x % 1);
}

function mySqrt2(x: number): number {
    if (x < 2) return x;

    let guess: number = x;

    while (true) {
        const next: number = (guess + x / guess) / 2;

        if (next >= guess) break;

        guess = next;
    }

    return guess - (guess % 1);
}

function mySqrt3(x: number): number {
    if (x < 2) return x;

    let left: number = 0;
    let right: number = Math.floor(x / 2)

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (mid * mid === x) return mid;

        if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

console.log(mySqrt(4));
console.log(mySqrt(8));
// console.log(mySqrt(2147395599));

console.log(mySqrt2(4));
console.log(mySqrt2(8));
console.log(mySqrt2(2147395599));

console.log(mySqrt3(4));
console.log(mySqrt3(8));
console.log(mySqrt3(2147395599));

// https://leetcode.com/problems/sqrtx/description/
