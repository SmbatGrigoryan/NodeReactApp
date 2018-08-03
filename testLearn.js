
module.exports = () => {
    // const findLongist = (str) => {
    //     if (str === str.split(' ').reverse().join(' ')){
    //         return 'polindrom'
    //     }
    //     return 'NOT'
    // };
    //
    // const revers = (str) => {
    //     return str[8];
    // };
    //
    // const factor = (num) => {
    //     let initial = 1;
    //     for ( let i =1; i <= num; i++) {
    //         initial *= i;
    //     }
    //     return initial;
    // };
    //
    // const factor2 = (num) => {
    //     if (num === 1) {
    //         return num
    //     }
    //
    //     return num *factor2(num - 1);
    //
    // };
    //
    // const toUpperCase = (sentence) => {
    //
    //     if ( typeof sentence !== "string") {
    //         return 'please enter string';
    //     }
    //
    //   return sentence.split(' ').map((ward) => {
    //         return ward.replace(ward.charAt(0), ward.charAt(0).toUpperCase())
    //     }).join(' ')
    //
    // };
    //
    //
    // const largest2 = (arr) => {
    //   return arr.map((subArr) => {
    //         return subArr.reduce((acc, cur) => {
    //            return acc > cur ? acc: cur;
    //         })
    //     })
    //
    // };
    //
    // let a = [
    //     [4, 5, 1, 3],
    //     [13, 27, 18, 26],
    //     [32, 35, 37, 39],
    //     [1000, 1001, 857, 1]
    // ];
    //
    // const largest = (a) => {
    //
    //     let maxArr = [];
    //     for (let i = 0; i < a.length; i++) {
    //         let subTempMax = -Infinity;
    //         for (let j = 0; j < a[i].length ; j++) {
    //             if (subTempMax < a[i][j]) {
    //                 subTempMax = a[i][j]
    //             }
    //         }
    //         maxArr[i] = subTempMax;
    //     }
    //
    //     return maxArr;
    //
    // };
    //
    // const repeat = (str, num) => {
    //     return num > 0 ? 'str '.repeat(num) : "";
    // };
    //
    // if (true) {
    //     var test = true; // use "var" instead of "let"
    // }
    //
    // console.log(test);
    //
    //
    //
    //
    //
    //
    //
    //
    // console.log(findLongist('ABBA'));
    // console.log(findLongist('we are lookingzzzzzz for'));
    // //console.log(factor(10));
    // console.log(factor2(10));
    // console.log(toUpperCase('we are lookingzzzzzz for'));
    // console.log(toUpperCase(5));
    // console.log(largest([
    //     [4, 5, 1, 3],
    //     [13, 27, 18, 26],
    //     [32, 35, 37, 39],
    //     [1000, 1001, 857, 1]
    // ]));
    //
    // console.log(largest2([
    //     [4, 5, 1, 3],
    //     [13, 27, 18, 26],
    //     [32, 35, 37, 39],
    //     [1000, 1001, 857, 1]
    // ]));
    //
    //
    // console.log('333'.length);

    //console.clear()
    // console.log("" + 1 + 0);
    // console.log("" - 1 + 0);
    // console.log('true + false', true + false);
    // console.log(6 / "3");
    // console.log("2" * "3");
    // console.log(4 + 5 + "px");
    // console.log("$" + 4 + 5);
    // console.log("4" - 2);
    // console.log(7 / 0);
    // console.log("  -9\n" + 5);
    // console.log("  -9\n" - 5);
    // console.log(null + 1);
    // console.log(undefined + 1);
    //
    //
    // const someThis = () => {
    //     console.log(this);
    // }
    //
    // var string = 'This is a string.';
    // string = string + 'H'
    // console.log(string)
    //
    //
    // someThis();
    //
    //
    // const obj = {'key': 'value'};
    // obj.key = 'otherValue';
    // console.log(obj.key)
    //

    // (['a', 'b', 'c', 'd'], 2)
    // ([0, 1, 2, 3, 4, 5], 3)
    // ([0, 1, 2, 3, 4, 5], 2)
    // ([0, 1, 2, 3, 4, 5], 4)

//     const monky = (arr, num) => {
//         let resultArr = [];
//         let tempArr = [];
//
//         for (let i = 0; i < arr.length; i++) {
//
//             if (i % num !== num - 1) {
//                 tempArr.push(arr[i]);
//             } else {
//                 tempArr.push(arr[i]);
//                 resultArr.push(tempArr);
//                 tempArr = [];
//             }
//         }
//         return resultArr;
//     };
//
//
//     const monky2 = (arr, size) => {
//         let tempArr = [];
//
//         for (let i = 0; i <= arr.length; i += size) {
//             tempArr.push(arr.slice(i, i + size));
//         }
//         return tempArr;
//     };
//
//     const monky3 = (arr, size) => {
//         let tempArr = [];
//         let i = 0;
//
//         while (i < arr.length) {
//             tempArr.push(arr.slice(i, i + size));
//             i += size;
//         }
//         return tempArr;
//     };
//
// const monky4 = (arr, size) => {
//         let tempArr = [];
//
//         while (arr.length > 0){
//             tempArr.push(arr.splice(0, size));
//         }
//         return tempArr;
//     };
//
// const slash = (arr, size) => {
//         let tempArr = [];
//
//         while (arr.length > 0){
//             tempArr.push(arr.splice(0, size));
//         }
//         return tempArr[tempArr.length-1];
//     };
//
// const slash2 = (arr, size) => {
//     return arr.slice(size);
// }
//
// const slash3 = (arr, size) => {
//     return arr.slice(arr.length - size - 1, arr.length);
// }
//
//
//     console.log(monky4(['a', 'b', 'c', 'd'], 2));
//     console.log(monky4([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
//     console.log(monky4([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
//     console.log(monky4([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//     console.log(slash([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//     console.log(slash2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
//     console.log(slash3([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

const romb = (length) => {

    for (let i = 0; i < length; i++) {
        let temp = '';
        let temp2 = '';


        if ( i < length/2) {
          for (let j = 0; j < length; j++){
            if( (j < length/2 - i) || (length/2 +i < j) ) {
              temp = temp + '-';
            } else {
              temp = temp + 'X';
            }
          }
          console.log(temp);
        } else {

          for (let j = 0; j < length; j++){

            if ( j < i -length/2 || 1.5*length - i < j  ) {
              temp2 = temp2 + '-';
            } else {
              temp2 = temp2 + 'X';
            }
          }
          console.log(temp2);
        }
    }
};


console.log(romb(11))
  console.log(new Date().toLocaleString())



};



