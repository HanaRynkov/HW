const array = [10, 20, 30, -10, 11, 100];
const index = array.indexOf(30);
//removing all numbers from 30
//const res = array.splice(index);
//array.splice(index, undefined, -1000);
//insert
//array.splice(index, 0, -10, -20);
//replace
//array.splice(index, 2, 20);
// const ar1 = [40,200];
// array.splice(index, 1, ...ar1);
// const numbersPerPage = 2;
// const page = 3;
// const firstIndex = (page - 1) * numbersPerPage
// const pageNumbers = array.slice(firstIndex,
//      firstIndex + numbersPerPage )
// const ar1 = array.map(multiply2);
// function multiply2(number) {
//     return number * 2;
// }
// const ar2 = array.map(function (number, index) {
//     return index + 1 + '. ' + number;
// });
// const ar3 = array.map(function(number) {
//     return `<li>${number}</li>`
// })
// const ulElement = `<ul>${ar3.join('')}</ul>`
//HW #14 (1)


function coloringString(str1, str2) {

    const arr1 = Array.from(str1);
    const arr2 = Array.from(str2);

    function comparestring(item, index) {
        if (item === arr1[index]) {
            return "green"
        }
        if (arr1.includes(item)) {
            return "yellow"
        }
        return "red"
    }
const result=arr2.map(comparestring);
console.log(result);
}

coloringString('pappy', 'apple');
//getting array of numbers in a given range. Example as follows 
// const min = 5;
// const max = 15;
// const ar4 = array.filter(function(number) {
//     return number >= min && number <= max;
// })
//getting new array of the elements of the source array with even indexes
const ar5 = array.filter(function (__, index) {
    return index % 2 === 0;
})
//HW #14 (2)
function getNumbersWithDigitsAmount(digitsAmount, array) {
    //takes: digitsAmount - given number of digits; array - any array of integer numbers
    //returns array of only numbers from the given array comprising of the given number of digits
    //examples: 
    //getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) returns [100, -100]
}