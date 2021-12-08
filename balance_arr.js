// Find the balance point of an Array 

// you are given an array of integer
// you need to find the balance point of the array and return the index of that point 

// Input: [1, 2, 2, 9, 3, 2]

// Output: 3

// because both sides would add up to 6 on left && right side 

function balanceArr(arr) {

    let sum = 0; // this will be the sum of all the elements in the array [1, 2, 2, 9, 3, 2] = 19

    let leftSum = 0; // this will be the left side sum 

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        sum += ele; 
    }

    for (let j = 0; j < arr.length; j++) {
        let ele2 = arr[j]
        sum -= arr[j]

        if ( leftSum === sum) {
            return j; // if they are equal, return the index, which is j 
        }
        leftSum += ele2; 
    }
    return false; 
}

const arr = [1, 2, 2, 9, 3, 2];
console.log(balanceArr(arr));


// const sumPoint = (arr) => {
//     const len = arr.length;
//     let sum = 0;
//     let leftsum = 0;
//     for (let i = 0; i < len; i++) {
//         sum += arr[i];
//     }
//     for (let j = 0; j < len; j++) {
//         sum -= arr[j];
//         if (leftsum === sum) {
//             return j;
//         }
//         leftsum += arr[j];
//     }
//     return false;
// }

// const arr = [1, 2, 2, 9, 3, 2];
// console.log(sumPoint(arr));
// // High level overview: 

// // Find the point from which the sum on the left === sum on the right 
// // transverse through the array and comparr the left side to the right side 

// // define sum = addition of total elements (19)
// // leftSum = 0
// // so basically we will keep subtracting until we hit 0

// // 19 - 1 = 18

// // check if leftSum === sum; 
// // if yes; return true 
