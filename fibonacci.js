// Given a number, n, print the nth Fibonacci number. 

function Fibonacci(num) {

    let arr = [];

    arr[0] = 0;
    arr[1] = 1

    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr; 

}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..

console.log(Fibonacci(2));
console.log(Fibonacci(9));

