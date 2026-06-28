function romanToInt(s: string): number {
    let intValue: number = 0;
    let arrayOfRomans: string[] = [];

    arrayOfRomans = s.split("");
    for (let i: number = 0; i < arrayOfRomans.length; i++) {
        if (arrayOfRomans[i] === "V" && arrayOfRomans[i-1] === "I") {
            intValue += 3;
        } else if (arrayOfRomans[i] === "X" && arrayOfRomans[i-1] === "I" ) {
            intValue +=8;
        } else if (arrayOfRomans[i] === "L" && arrayOfRomans[i-1] === "X") {
            intValue +=30;
        } else if (arrayOfRomans[i] === "C" && arrayOfRomans[i-1] === "X" ) {
            intValue +=80;
        } else if (arrayOfRomans[i] === "D" && arrayOfRomans[i-1] === "C" ) {
            intValue +=300;
        } else if (arrayOfRomans[i] === "M" && arrayOfRomans[i-1] === "C" ) {
            intValue +=800;
        } else {
            switch (arrayOfRomans[i]) {
                case "I":
                    intValue++;
                    break;
                case "V":
                    intValue += 5;
                    break;
                case "X":
                    intValue += 10;
                    break;
                case "L":
                    intValue += 50;
                    break;
                case "C":
                    intValue += 100;
                    break;
                case "D":
                    intValue += 500;
                    break;
                case "M":
                    intValue += 1000;
                    break;
            }
        }

    }

    return intValue;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"))