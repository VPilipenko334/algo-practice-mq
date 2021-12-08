// Find the duplicates gives an array 

function duplicates(arr) {

    result = [],
    map = {};

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i]

        if (!map.hasOwnProperty(num)) {
            map[num] = 1; 
        } else {
            result.push(num); 
        }
    }

    result = [...new Set(result)] // spread operator putting it into an array 
    return result; 
}

// High level overview: 

// 1. Use a Map data structure, check if the key exists within the map or not 
// if the key does not exist then add that result to the result as duplicate entry

const arr = [1, 2, -2, 4, 5, 4, 4, 4, 5, 5, 7, 9, 71, 7, 8, 7, 7, 71, 3, 6];
const arr2 = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6, 6, 9, 9];
console.log(duplicates(arr));
console.log(duplicates(arr2));

// Create a results arr where you will store all the duplicates; 
// creare a map object;
// Loop through until arr.length; 
// check if the map DOES NOT has the number in it; if not, we switch the value to 1
// meaning it only occurs once in the arr 
// otherwise, we will push the number in the arr because it occurs twice 
// spread opeator, with a new Set and result 

