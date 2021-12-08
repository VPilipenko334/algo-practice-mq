// Given a list of people with their birth year and death year (1900 - 2000) 
// find the year with the most people alive



function mostPeople(arr) {

    let yearArr = new Array(11).fill(0);

// update the value with '+1' or '-1' for the index birthyear

 for ( let i = 0; i < arr.length; i++) {
     let ele = arr[i];

     yearArr[ele.by - 1990] += 1;
     yearArr[ele.dy - 1990] += 1;
 }

 let population = 0; 

 let maxPop = 0; 

 let maxYear = 0; 

 for (let j = 0; j < arr.length; j++) {
     population+
 }


}

let people = [{ 'by': 1990, 'dy': 1992 }, { 'by': 1995, 'dy': 1999 }, { 'by': 1992, 'dy': 2000 }, { 'by': 1990, 'dy': 1996 }];

console.log(mostPeople(people));

// pre fill the array with the value of 0; 
// because it's a 10 year difference, we can use 0 - 10 index 

// HOW TO SOLVE: 

// pre fill the array with 0's 
// [0,0,0,0,0,0,0,0,0,0,0]