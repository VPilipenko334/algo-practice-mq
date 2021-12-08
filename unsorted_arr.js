// Given an unsorted array of size N of non-negative integers, find a cont.
// subarray which adds to a given number S

// Input: [1, 2, 4, 6, 7, 5], 12
// Output: [7, 5]

// Keep adding numbers from the array; check conditions 
// if it's equal to the sum, we can slice the array and return it 
// it's less than the sum, we keep adding numbers 

function contSum(arr, target) {

    let sum = 0; 

    let results = []; 

    for (let i = 0, j = 0; i < arr.length; i++) {
        
        // let ele = arr[i];
        // let ele2 = arr[j];

        sum += arr[i]; 

        while (sum > target) {
            sum -= arr[j]; 
            j++;
        }

        if ( sum === target) {
            results.push(arr.slice(j, i + 1));
        }

    }

    return results; 
}


console.log(contSum([1, 2, 4, 6, 7, 5], 12));


const continuesSum = (arr, T) => {
    let sum = 0;
    let results = [];
    for (let i = 0, j = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum > T) {
            sum -= arr[j];
            j++;
        }
        if (sum === T) {
            results.push(arr.slice(j, i + 1));
        }
    }
    return results;
}
console.log(continuesSum([1, 2, 4, 6, 7, 5], 12));

// High level overview: 

// setting a sum variable equal to 0 which will keep track 
// putting the results in an array format
// for loop with i and j 