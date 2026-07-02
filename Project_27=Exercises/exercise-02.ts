function isPalindrome(x: number): boolean {
    let _isPalindrome = false;

    if (x >= 0) {
        let _mirrorOfNumber = Number(Array.from(String(x), Number).reverse().join(""));

        if (x === _mirrorOfNumber) {
            _isPalindrome = true;
        }
    }

    return _isPalindrome;
}

function isPalindromeImproved(x: number): boolean {
    if (x >= 0) {
        let mirrorOfNumber = Number(x.toString().split("").reverse().join(""));

        if (x === mirrorOfNumber) {
            return true;
        }
    }

    return false;
}

function isPalindromeImprovedMore(x: number): boolean {
    if (x < 0) return false;
    let mirrorOfNumber = Number(x.toString().split("").reverse().join(""));

    return x === mirrorOfNumber;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10))

console.log("---------")

console.log(isPalindromeImproved(121));
console.log(isPalindromeImproved(-121));
console.log(isPalindromeImproved(10))

console.log("---------")

console.log(isPalindromeImprovedMore(121));
console.log(isPalindromeImprovedMore(-121));
console.log(isPalindromeImprovedMore(10))

console.log("------------------");

function numberIsPalindrome(x: number): boolean {
    if (x < 0) return false;
    let mirror: string = x.toString();
    let length: number = mirror.length -1;

    for (let i: number = 0; i < length; i++) {
        if (mirror[i] !== mirror[length]) return false;
        length--;
    }

    return true;
}

console.log(numberIsPalindrome(121));
console.log(numberIsPalindrome(-121));
console.log(numberIsPalindrome(10));
console.log(numberIsPalindrome(545454));
console.log(numberIsPalindrome(444444));
console.log(numberIsPalindrome(1000030001));