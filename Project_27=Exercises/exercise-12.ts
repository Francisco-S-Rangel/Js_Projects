function transpose(matrix: number[][]): number [][] {
    let newMatrix: number[][] = [];
    let row: number = 0;
    let column: number = 0;
    const length: number = matrix.length > matrix[0].length? matrix.length : matrix[0].length;

    for (let i: number = 0; i < length; i++) {
        let newArray = [];
        while(row < matrix.length){
            if (matrix[row][column] !== undefined && matrix[row][column] !== null) {
                newArray.push(matrix[row][column]);
            }
            row++;
        }
        if (newArray && newArray.length > 0) {
            newMatrix.splice(i, 0, newArray);
        }
        row = 0;
        column++;
    }
    
    return newMatrix;
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
console.log(transpose([[5],[8]]));
console.log(transpose([[-51,36,-31,23],[3,12,-31,65],[-20,2,-42,-62],[0,-49,75,77],[-52,46,45,37],[-98,17,14,78],[50,88,-15,-31],[84,-59,-96,23],[42,1,48,81],[-92,95,-71,37]]))
// https://leetcode.com/problems/transpose-matrix/description/
