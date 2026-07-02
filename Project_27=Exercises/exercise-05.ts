// function isPalindrome(s: string): boolean {

//     return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === s.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome(""));

console.log("----------------");

function isPowerOfTwo(n: number): boolean {
    let powerOfTwo: boolean = true;
    if (n >= 0) {
        do {
            if ((n % 2 === 1 && n !== 1) || n === 0) {
                powerOfTwo = false;
                break;
            }
            n = n / 2;
        } while (n > 0);
    } else {
        powerOfTwo = false;
    }
    return powerOfTwo;
}

function isPowerOfTwoImproved(n: number): boolean {
    if (n <= 0) return false;

    while (n > 0) {
        if (n % 2 === 1 && n !== 1) return false;
        n = n / 2;
    }

    return true;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(-16));

console.log("--------------");

console.log(isPowerOfTwoImproved(0));
console.log(isPowerOfTwoImproved(1));
console.log(isPowerOfTwoImproved(2));
console.log(isPowerOfTwoImproved(3));
console.log(isPowerOfTwoImproved(16));
console.log(isPowerOfTwoImproved(-16));