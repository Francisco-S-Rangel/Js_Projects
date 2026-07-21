function tribonacci(n: number): number {
    if (n === 0)
        return 0;
    
    if (n === 1 || n === 2)
        return 1;
    
    let t1: number = 0;
    let t2: number = 1;
    let t3: number = 1;
    let nextTerm: number = 2;

    for (let i: number = 3; i <= n; i++) {
        nextTerm = t1 + t2 + t3;
        t1 = t2;
        t2 = t3;
        t3 = nextTerm;  
    }

    return nextTerm;
};