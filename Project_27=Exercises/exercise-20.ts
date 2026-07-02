// https://leetcode.com/problems/length-of-last-word/description/

// function lengthOfLastWord(s: string): number {
//     if (!s || s.length === 0)
//         return 0;

//     const stringsArray: string[] = s.trim().split(/\s+/);
//     const length: number = stringsArray.length - 1;

//     return stringsArray[length].length;
// }

function lengthOfLastWord(s: string): number {
    let lastWord: string = "";

    for (let i: number = s.length - 1; i >= 0; i--) {
        if(lastWord !== "" && s[i] === " ")
        break;

        if(s[i] !== " ")
        lastWord += s[i]; 
    }

    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));