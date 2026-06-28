function getSmallestNumber(arr: number[]): number {
    let smallestNumber: number = arr[0];
    let lowestIndex: number = 0;

    for(let i: number = 1; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i];
            lowestIndex =  i;
        }
    }

    return lowestIndex;
}

function sortBySelection(arr: number[]): number[] {
    let sortedArr: number[] = [];
    const length: number = arr.length;

    for (let i: number = 0; i < length; i++) {
        let smallestIndex: number = getSmallestNumber(arr);
        sortedArr.push(arr.splice(smallestIndex, 1)[0]);
    }

    return sortedArr;
}

console.log(sortBySelection([5, 3, 6, 2, 10]));