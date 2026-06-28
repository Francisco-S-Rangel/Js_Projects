function addBinary(a: string, b: string): string {
    let valueA: number = 0;
    let valueB: number = 0;
    let binarySum: string = "";

    for(let i: number = 0; i < a.length; i++) {
        valueA += (i * 2) + Number(a[i]);
    }

    for(let j: number = 0; j < b.length; j++) {
        valueB += (j * 2) + Number(b[j]);
    }

    valueA -= a.length;
    valueB -= b.length;

    let sum: number = valueA + valueB;
    while (sum > 0) {
        binarySum += String(sum % 2); 
        sum = Math.floor(sum / 2);
    }

    // return binarySum.split("").reverse().join("");
    return binarySum;
}

console.log(addBinary("11","1"));
console.log(addBinary("1010", "1011"));
// https://leetcode.com/problems/add-binary/description/