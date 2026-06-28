// https://leetcode.com/problem-list/linked-list/
function judgeCircle(moves: string): boolean {
    let counterUD: number = 0;
    let counterRL: number = 0;
    for (let i: number = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                counterUD--;
                break;
            case "D":
                counterUD++;
                break;
            case "R":
                counterRL--;
                break;
            case "L":
                counterRL++;
                break;
        }

    }

    return !counterUD && !counterRL;
}

console.log(judgeCircle("UD"));
console.log(judgeCircle("RRDD"));
console.log(judgeCircle("LL"));
console.log(judgeCircle("RR"));
console.log(judgeCircle("DURDLDRRLL"));