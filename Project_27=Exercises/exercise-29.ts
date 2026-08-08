// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/description/

function minimumPushes2(word: string): number {
    let wordMap: Map<string, number> = new Map();
    let pushes: number = 0;

    for (const letter of word) {
        wordMap.set(letter, (wordMap.get(letter) ?? 0) + 1);
    }

    const frequencies: number[] = [...wordMap.values()].sort((a, b) => b - a);

    for (let i: number = 0; i < frequencies.length; i++) {
        const cost = Math.floor(i / 8) + 1;
        pushes += frequencies[i] * cost;
    }

    return pushes;
};

console.log(minimumPushes2("abcdefgh"));
console.log(minimumPushes2("abcdefghi"));
// console.log(minimumPushes2("aabcdefghi"));
console.log(minimumPushes2("abcdefghij"));
console.log(minimumPushes2("abcdefghijj"));