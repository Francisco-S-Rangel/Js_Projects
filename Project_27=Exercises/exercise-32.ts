// https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/description/

function checkDivisibility(n: number): boolean {
    const numbers: string = n.toString();
    let sum: number = 0;
    let product: number = 1;

    for (let i: number = 0; i < numbers.length; i++) {
        let aux: number = Number(numbers[i]);
        sum = sum + aux;
        product = product * aux;
    }

    return n % (sum + product) === 0;
}

console.log(checkDivisibility(99));
console.log(checkDivisibility(10));