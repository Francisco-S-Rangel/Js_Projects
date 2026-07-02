function intToRoman(num: number): string {
    let romanNumber: string = "";
    let numberClone: number = num;
    let romanMap: Map<number, string> = new Map([
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"]
    ]);

    if (numberClone <= 3999) {
        while (numberClone >= 1000) {
            romanNumber += romanMap.get(1000);
            numberClone -= 1000;
        }
    }
    if (numberClone >= 900) {
        romanNumber += "CM";
        numberClone -= 900;
    } 
    if (numberClone >= 500) {
        romanNumber += "D";
        numberClone -= 500;
    }
    if (numberClone >= 400) {
        romanNumber += "CD";
        numberClone -= 400;
    }
    if (numberClone >= 100) {
        while (numberClone >= 100) {
            romanNumber += romanMap.get(100);
            numberClone -= 100;
        }
    }
    if (numberClone >= 90) {
        romanNumber += "XC";
        numberClone -= 90;
    }
    if (numberClone >= 50) {
        romanNumber += "L";
        numberClone -= 50;
    }
    if (numberClone >= 40) {
        romanNumber += "XL";
        numberClone -= 40;
    }
    if (numberClone >= 10) {
        while (numberClone >= 10) {
            romanNumber += romanMap.get(10);
            numberClone -= 10;
        }
    }
    if (numberClone >= 9) {
        romanNumber += "IX";
        numberClone -= 9;
    }
    if (numberClone >= 5 ) {
        romanNumber += "V";
        numberClone -= 5;
    }
    if (numberClone >= 4) {
        romanNumber += "IV"
        numberClone -= 4;
    }
    if (numberClone < 4) {
        while (numberClone >= 1) {
            romanNumber += romanMap.get(1);
            numberClone -= 1;
        }
    }

    return romanNumber;
};

console.log(intToRoman(10));
// console.log(intToRoman(37))
// console.log(intToRoman(46));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(3749));