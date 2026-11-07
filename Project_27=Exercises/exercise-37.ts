function climbStairs(n: number): number {
    if (n <= 2) return n;

    let stepOne: number = 1;
    let stepTwo: number = 2;
    let nextValue: number = 0;

    for (let i: number = 3; i <= n; i++){
        nextValue = stepOne + stepTwo;
        stepOne = stepTwo;
        stepTwo = nextValue;
    }

    return nextValue;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));
console.log(climbStairs(8));

// https://leetcode.com/problems/climbing-stairs/description/

// 1 + 1 + 1 + 1 + 1 = 5
// 1 + 1 + 1 + 2 = 5
// 1 + 1 + 2 + 1 = 5
// 1+ 2 + 1 + 1 = 5
// 2 + 2 + 1 = 5
// 1 + 2 + 2 = 5
// 2 + 1 + 2 = 5