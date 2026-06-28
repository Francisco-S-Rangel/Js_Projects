function strStr(haystack: string, needle: string): number {

    for (let i: number = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let stringInString = "";
            for (let j: number = 0; j < needle.length; j++) {
                stringInString += haystack[i + j];
            }
            if (stringInString === needle) {
                return i;
            }
        }
    }
    return -1;
}

console.log(strStr("sadbutsad","sad"));
console.log(strStr("leetcode","leeto"));

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/