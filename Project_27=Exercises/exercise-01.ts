function binaryGap(n: number): number {
    let binaryArray: number[] = [];
    let numberCopy: number = n;
    let adjacent: number = 0;

    while(numberCopy > 0) {
        binaryArray.push(numberCopy % 2);
        numberCopy = Math.floor(numberCopy / 2);
    }

    binaryArray = binaryArray.reverse();
    console.log(binaryArray);

    let counterZeros = 0;
    for (let i: number = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === 0) {
            counterZeros++;
        }
        if (binaryArray[i-1] === 0 && binaryArray[i] === 1) {
            if (adjacent <= counterZeros) {
                adjacent = counterZeros + 1;
            }
            counterZeros = 0;
        }
        if (binaryArray[i-1] === 1 && binaryArray[i] === 1){
            if(adjacent < 1){
                adjacent = 1;
            }
        }
    }

    return adjacent;
}

const numberInput = 5
console.log(binaryGap(numberInput));

const numberInputTwo = 6;
console.log(binaryGap(numberInputTwo));

const numberInputThree = 8;
console.log(binaryGap(numberInputThree));

const numberInputFour = 9;
console.log(binaryGap(numberInputFour));

const numberInputFive = 13;
console.log(binaryGap(numberInputFive))

const numberInputSix = 22;
console.log(binaryGap(numberInputSix))
