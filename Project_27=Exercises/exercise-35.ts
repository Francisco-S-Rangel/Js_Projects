// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    let value: string = s[0];
    let lastValue: string = s[s.length - 1];
    let countParent: number = 0;
    let countSquare: number = 0;
    let countCurly: number = 0;

    let orderStack: string[] = [];

    if (s.length === 1 || value === ")" || value === "]" || value === "}")
        return false;

    if(lastValue === "(" || lastValue === "[" || lastValue === "{")
        return false;

    for (let i: number = 0; i < s.length; i++) {
        value = s[i];
        if (value === ")") {
            if (orderStack.pop() !== "(")
                return false;
            countParent--;
        } else if (value === "]") {
            if (orderStack.pop() !== "[")
                return false;
            countSquare--;
        } else if (value === "}") {
            if (orderStack.pop() !== "{")
                return false;
            countCurly--;
        } else {
            switch (value) {
                case "(":
                    countParent++;
                    orderStack.push("(");
                    break;
                case "[":
                    countSquare++;
                    orderStack.push("[");
                    break;
                case "{":
                    countCurly++;
                    orderStack.push("{");
                    break;
            }
        }

        if (countParent < 0 || countSquare < 0 || countCurly < 0)
            return false;
    }

    return countParent === 0 && countSquare === 0 && countCurly === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
console.log(isValid("["));
console.log(isValid("[["));
console.log(isValid("(){}}{"));
console.log(isValid("[([]])"));

function isValid2(s: string): boolean {
    let orderStack: string[] = [];
    const length: number = s.length - 1;

    if (s[0] === ")" || s[0] === "}" || s[0] === "]")
        return false;

    if (s[length] === "(" || s[length] === "{" || s[length] === "[")
        return false;

    for (let i: number = 0; i <= length; i++) {

        if (s[i] === ")") {
            if (orderStack.pop() !== "(")
                return false;
        } else if (s[i] === "]") {
            if (orderStack.pop() !== "[")
                return false;
        } else if (s[i] === "}") {
            if (orderStack.pop() !== "{")
                return false;
        } else {
            orderStack.push(s[i]);
        }      
    }

    return orderStack.length === 0;
}

console.log(isValid2("()"));
console.log(isValid2("()[]{}"));
console.log(isValid2("(]"));
console.log(isValid2("([])"));
console.log(isValid2("([)]"));
console.log(isValid2("["));
console.log(isValid2("[["));
console.log(isValid2("(){}}{"));
console.log(isValid2("({{{{}}}))"));
console.log(isValid2("[([]])"));

// https://leetcode.com/problems/permutations/description/ -> exercise-09.ts