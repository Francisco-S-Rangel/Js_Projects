// https://leetcode.com/problems/sequential-digits/

function sequentialDigits(low: number, high: number): number[] {
    let digits: Set<number> = new Set();

    for (let i: number = low; i <= high; i++) {
        console.log(i);
        let numberValue: string = String(i);
        let sequential: boolean = true;
        for (let j: number = 0; j <= numberValue.length - 1; j++ ){
            let currentNumber: number = Number(numberValue[j]);
            let nextNumber: number = Number(numberValue[j + 1]);
            // console.log(Number(currentNumber) + 1, nextNumber);
            // console.log(numberValue[j + 1] !== undefined, nextNumber !== currentNumber + 1);
            if (numberValue[j + 1] !== undefined && nextNumber !== currentNumber + 1) {
                sequential = false;
                continue;
            } 
        }

        if (sequential) {
            digits.add(i);
        }
    }
    
    return [...digits];
};

function sequentialDigits2(low: number, high: number): number[] {
    let digits: number[] = [];

    for (let i: number = low; i <= high; i++) {
        let numberValue: number[] = Array.from(String(i), Number);
        let sequential: boolean = true;
        let sumString: string = "";
        for (let j: number = 0; j <= numberValue.length - 1; j++){
            sumString += 1;
            if (numberValue[j + 1] !== undefined && numberValue[j + 1] !== numberValue[j] + 1) {
                sequential = false;
                continue;
            } 
        }

        if (sequential) {
            digits.push(i);
            i = i + Number(sumString) - 1;
        }
    }
    
    return digits;
};

function sequentialDigits3(low: number, high: number): number[] {
    const allPossibleSequentialDigits: number[] = [];

    for (let i: number = 1; i <= 9; i++) {
        let sumString: string = `${i}`;
        for (let j: number = i + 1; j <= 9; j++) {
            sumString += j;
            allPossibleSequentialDigits.push(Number(sumString));
        }
    }

    return allPossibleSequentialDigits.filter(value => value >= low && value <= high).sort((a, b) => a - b);
}

function sequentialDigits4(low: number, high: number): number[] {
    const allPossibleSequentialDigits: number[] = [
        12,       23,       34,        45,
        56,       67,       78,        89,
        123,      234,      345,       456,
        567,      678,      789,      1234,
        2345,     3456,     4567,      5678,
        6789,    12345,    23456,     34567,
        45678,    56789,   123456,    234567,
        345678,   456789,  1234567,   2345678,
        3456789, 12345678, 23456789, 123456789
    ];
    let digits: number[] = [];

    for (let i: number = 0; i <= allPossibleSequentialDigits.length - 1; i++) {
        if (high < allPossibleSequentialDigits[i])
            break;

        if (allPossibleSequentialDigits[i] <= high && allPossibleSequentialDigits[i] >= low)
            digits.push(allPossibleSequentialDigits[i]);
    }

    return digits;
}

// console.log(sequentialDigits(123, 123));
// console.log(sequentialDigits(100, 300));
// console.log(sequentialDigits2(1000, 13000));
// console.log(sequentialDigits2(10, 1000000000));
// console.log(sequentialDigits3(10, 10));
console.log(sequentialDigits3(100, 300));