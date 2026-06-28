// function mapWordWeights(words: string[], weights: number[]): string {
//     let mappedString: string = "";
//     let allLetters: string = "abcdefghijklmnopqrstuvwxyz";
//     let lettersMap: Map<string, number> = new Map();
//     let reverseMap: Map<number, string> = new Map();

//     let weightReverse: number = 25;
//     for (let i: number = 0; i < allLetters.length; i++) {
//         lettersMap.set(allLetters[i], weights[i]);
//         reverseMap.set(weightReverse, allLetters[i]);
//         weightReverse--;
//     }

//     words.forEach(word => {
//         let lengthWord: number = word.length;
//         let sum: number = 0;
//         for (let j: number = 0; j < lengthWord; j++) {
//             sum += lettersMap.get(word[j]);
//         }
//         mappedString += reverseMap.get(sum % 26);
//     })

//     return mappedString;
// };

function mapWordWeights(words: string[], weights: number[]): string {
    let mappedString: string = "";
    const codeA: number = "a".charCodeAt(0);
    const codeZ: number = "z".charCodeAt(0);

    for (const word of words) {
        let sum: number = 0;

        for (const char of word) {
            sum += weights[char.charCodeAt(0) - codeA];
        }

        mappedString += String.fromCharCode(codeZ - (sum % 26));
    }

    return mappedString;
}

let input: string[] = ["abcd","def","xyz"];
let weights: number[] = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2];

console.log(mapWordWeights(input, weights));