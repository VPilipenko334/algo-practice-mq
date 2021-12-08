// Write an algorithm that brings all the nonzero elements to the left of the array
// returns the number of non-zero elemets 

function zeroTransfer1(arr) {

    let j = arr.length - 1; 

    for (let i = 0; i < arr.length; i++) {

        let ele = arr[i];

        if (ele === 0) {
            while (arr[j] === 0 && j > i) {
                j--;
            }
            
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }

    return arr; 
}


console.log(zeroTransfer1([1, 2, 0, 4, 3, 0, 5, 0]))

function zeroTransfer2(arr) {

    let count = 0; 
    
    for (let i = 0; i < arr.lenght; i++) {

        let ele = arr[i];

        if (ele !== 0) {
            arr[count++] = arr[i]; 
        }
    }

        while (count < arr.length) {
            arr[count++] = 0;
        }

        return arr; 
}

console.log(zeroTransfer1([1, 2, 0, 4, 3, 0, 5, 0]))

// High level overview: 

// use a for loop to check the value of the arr element
// if the value is non-zero, do nothing
// if it's zero, we will use temp variable to sap the zero value with non-zero value 

