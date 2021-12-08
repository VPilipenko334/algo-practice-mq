// Reverse the words of a given string

// Input: 'the sky is blue'
// Output: 'blue is sky the'

// your reversed string should not contain leading or trailing spaces

function reverseString(string) {

    let wordsArr = string.split(' ') // on a space because we are looping backwards on words 

    let result = [];

    for (let i = wordsArr.length - 1; i >= 0; i--) { // loop backwards 
        result.push(wordsArr[i] + ' '); 
    }

    return result.join(' ');

}

console.log(reverseString('the sky is blue'));

// High level overview: 

// 1) Turn the string into a words array 
// 2) Loop 
// 3) reverse the order of the words in the string 