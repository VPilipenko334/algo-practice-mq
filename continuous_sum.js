// Given a non - negative array of numbers and a target integer k,
// write a function to check if the array has a contious subarray of the size of 
// AT LEAST 2 that sum up to k 

// input: [23, 2, 4, 6, 7] k = 6;
// output: true 
// because [2, 4] is a cont. subarray of length 2 and sum up to 6

function contSum(arr, target) {  //[1, 3, 4, 6, 7, 5]

    let sum = 0; 

    let results = []; 

    for (let i = 0, j = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > target) {
            sum -= arr[j];
            j++;
        }

        if (sum === target) {
            results.push(arr.slice(j, i + 1))
        }
    }

    return results; 
}

function contSum2(arr, target) {

    let sum = 0; 

    let result = []; 

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]

            if (target === 0) {
                return sum;
            } else {
                sum % target; 
            }
        }
    }

    return false; 

}


// console.log(contSum([1, 3, 4, 6, 7, 5], 12));
console.log(contSum2([1, 3, 4, 6, 7, 5], 12));




// High level overview: 

// scan the array and keep adding elements together; 
// most likely going to be a loop or a nested loop; more than 1 variable 

// if the current sum is greater than the target sum, we will remove the first ele and keep moving 

// 1. set a sum variable = 0 
// 2. set results to an empty array 
// 3. regular for loop declaring two variables 