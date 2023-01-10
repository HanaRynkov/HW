const array = [123, 9, 28, 3, 44, -123];
array.sort(function(e1, e2){
    let res = e1.toString().length - e2.toString().length;
    if (!res) {
        res = e1 - e2;
    }
    return res;
});
// console.log(`result of sorting [123, 9, 28, 3, 44] is ${array}`)
//HW #15
/************************************************************************************** */
//task sort.1
function evenOddSort(array) {
    //TODO
    //sort array of number in the order even numbers go before the odd ones
    //example input array [20, -10,333,1000, 552, 7, -7] => [20, -10, 1000, 552, 333, 7, -7]
    const res = array.sort(function(e1,e2) {
        return(e1 % 2 === 0 && e2 % 2 !==0) ? -1:
        (e2 % 2 === 0 && e1 % 2 !==0) ? 1 : 0;
    });
    return res;
};

//task sort.2
function oddEvenSort(array) {
    //TO DO
    //sort array of number in the order even numbers go after the odd ones
    //example input array [20, -10,333,1000, 552, 7, -7] => [333, 7, -7, 20, -10, 1000, 552]
    const res = array.sort(function (e1,e2){
        return (e1 % 2 !== 0 && e1 % 2 === 0) ? 1 : 0;
    });
}
//task sort.3
function evenAscOddDesc(array) {
    //TODO
    //sort array of number in the order even numbers go before the odd ones
    //even numbers should be in the ascending order, odd numbers should be in the descending
    //example input array [20, -10,333,1000, 552, 7, -7] => [-10, 20, 552, 100, 333, 7, -7]

    let res = evenOddSort(array);
    res = array.sort(function(e1,e2){
        return (e1 % 2 === 0 && e2 % 2 === 0) ? (e1-e2):
        (e1 % 2 !== 0 && e2 % 2 !== 0) ? (e2 - e1): 0;
    });
    return res;
}
/*************************************************************************** */
//reduce
//find sum of the numbers in an array
// function sum(array) {
//     const res = array.reduce(function(res, cur){
//         return res + cur;
//     } );
//     return res;
// }
// console.log(`sum([1,2,3,4,5]) returns ${sum([1,2,3,4,5])}`);
// console.log([1, 2, 3, 4].reduce(function (x, y) {
//     console.log(x, y);
//     return x + y;
  
// },5)); //1-function call x = 1, y = 2; 2-function call x = undefined, y = 3; 3-th x = undefined, y = 4
console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  ));
  //1 - acc - [1, 2], cur - [0, 1]
  //2 - acc -[1, 2, 0, 1], cur - [2, 3]
  //HW #15
  //task reduce.1
  function getMin(array) {
    return array.reduce(function(accumulator , currentValue) {
        return Math.min(accumulator , currentValue);
    },
    Infinity);
  }
  //task reduce.2
  function getMax(array) {
    return array.reduce(function(accumulator , currentValue) {
        return Math.max(accumulator , currentValue);
    },
    Infinity);
  }
    
  
  //task reduce.3
  function getAverage(array) {
    return array.reduce(function(accumulator , currentValue){
        return accumulator + currentValue;
    })/array.length
  }
  //task reduce.4
  function getMinMaxAvg(array) {
    return array.reduce((acc,cur,i)=> {
    acc[0] = (acc[0] === undefined || cur < acc[0]) ? cur : acc[0];
    acc[1] = (acc[1] === undefined || cur > acc[1]) ? cur : acc[1];
    acc[2] = (acc[2] === undefined) || cur : acc[2] +  cur ;
    if (i == array.length-1){
        acc[2]/=array.length;
    }
    return acc;
  }, []);
}
console.log(getMinMaxAvg(array1));
console.log(getMinMaxAvg(arr));