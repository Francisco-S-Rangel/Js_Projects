// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/description/

function minimumPushes(word: string): number {
    let pushes: number = 0;

    for (let i: number = 0; i < word.length; i++) {
        if (i < 8) {
            pushes++;
        } else if (i < 16) {
            pushes +=  2;
        } else if (i < 24) {
            pushes += 3;
        } else {
            pushes += 4;
        }
    }

    return pushes;
};