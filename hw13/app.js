
function getRandomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1))
}
for (let i = 0; i < 10; i++) {
}
function getRandomMatrix(rows, columns, min, max) { // матрица - массив массивов
    //rows - элементы массива, column - элементы элеманта
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max));
        }
    }
    return matrix;
}

const ar10 = [1, 2, 3, 4, 5];
const str = ar10.join('_');
console.log(ar10.join(','));

const strClass = getRandomNumber(0, 1) === 0 ? 'White' : 'black';
const str1 = "hello world";
const str2 = 'hello' + '"world"';
const str3 = `class="${strClass}"`;
function matrixTransp(matrix) {
    //todo
    //returns transp matrix
    //   matrix = [[1,2],// input
    //             [3,4],
    //             [4,5] 
    //               ]
    //   output         [1,3,4]
    //                  [2,4,5]  
}
Task#1
function getHtmlUl(ar) {
    const HTML = [];
    HTML.push('<ul class= "list_class">');
    for (let i = 0; i < ar.length; i++) {
        let strClass = (ar[i] === 0) ? "white" : "black";
        HTML.push('<li class="item_class="${strClass}"></div></li>');
    }
    HTML.push('</ul>');
    return HTML.join("");
}
let resHTML = getHtmlUl(ar1);
console.log(resHTML);

Task#2
function transpMatrix(matrix) {
    if (matrix && matrix.length == 0) {
        return [];
    }
    for (let row = 1; row < matrix.length; row++) {
        if (!matrix[row] || matrix[row - 1] || matrix[row].length != matrix[row - 1].length) {
            return undefined;
        }
    }
    const newMatrix = [];
    let rows = matrix[0].length;
    let colums = matrix.length;
    for (let j = 0; j < rows; j++) {
        newMatrix.push([]);
        for (let j = 0; j < colums; i++) {
            newMatrix[j].push(matrix[i][j]);
        }
    }

    return newMatrix;
}
