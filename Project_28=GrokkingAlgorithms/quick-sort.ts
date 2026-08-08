function quickSort(numbers: number[]): number[] {
    if (numbers.length < 2) {
        return numbers;
    }

    const pivot: number = numbers[0];
    const lowest: number[] = numbers.slice(1).filter((i: number) => i <= pivot);
    const highest: number[] = numbers.slice(1).filter((i: number) => i > pivot);

    return [...quickSort(lowest), pivot, ...quickSort(highest)];
}

console.log(quickSort([23,45,12,90,87,45,23,1,8,9,12,27,5]));

function quickSort2(numbers: number[]): number[] {
    if (numbers.length < 2) return numbers;

    const pivot: number = numbers[0];
    const lower: number[] = [];
    const higher: number[] = [];

    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] <= pivot) {
            lower.push(numbers[i]);
        } else {
            higher.push(numbers[i]);
        }
    }

    return [...quickSort(lower), pivot, ...quickSort(higher)];
}

console.log(quickSort2([23,45,12,90,87,45,23,1,8,9,12,27,5]));