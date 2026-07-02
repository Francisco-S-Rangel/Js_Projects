// https://leetcode.com/problems/fibonacci-number/description/

function fib(n: number): number {
    let f1: number = 0;
    let f2: number = 1;
    let nextPosition: number = 0;

    if (n === 0)
        return 0;
    
    for (let i: number = 0; i <= n; i++) {
        if (i === 1 || i === 2)
            continue;
        
        nextPosition = f1 + f2;
        f1 = f2;
        f2 = nextPosition;
    }

    return nextPosition;
};