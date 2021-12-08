// Write a funtion to return if two words are exactly "one edit" away. 

// An edit can be inserting one character anywhere in the word, 
// or removing one character or replacing one character 
// but only exactly one character 

// string1 = "payal"
// string2 = "paypal"

// after comparing the inputs, you can either 
// add a char to string1 or remove a char from str2 === true 

// returning a boolean 

function oneEditBool(string1, string2) {

    let counter = 0; 

    let i = 0; 
    let j = 0; 

    let length = Math.floor(string1.length - string2.length);

    if (length > 1) return false; 

    let initialLength = (string1.length > string2.length) ? string1.length : string2.length; 

    while ( i < initialLength && j < initialLength) {
        if 
    }

}

console.log(oneEditBool('same', 'smey'));

// high level overview: 
// compare chars side by side on both string 
// set a counter, add to the counter if only 1
// if greater than EXACTLY 1, return false 

// subtract the string lengths --> will give us the chars left 

// if the length is greater than EXACTLY 1; return false; 

