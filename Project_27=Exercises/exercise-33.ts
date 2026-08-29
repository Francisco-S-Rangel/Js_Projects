// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
    let commonPrefix: string = "";
    let strCompare: string = strs[0];

    for (let i: number = 1; i < strs.length; i++) {
        let currentStr: string = strs[i];

        for (let z: number = 0; z < currentStr.length; z++) {
            if (currentStr[z] !== strCompare[z]) {
                break;
            } 
            commonPrefix = commonPrefix + currentStr[z];
        }

        strCompare = commonPrefix;
        commonPrefix = "";
    }

    commonPrefix = strCompare;
    return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["cir","car"]));