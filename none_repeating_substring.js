// Find the longest non-repeating substring from the given string 

// High level overview: 

// 1 Set a pointer at the starting index and keep adding chars until we find a repeating char
// 2 Once we find a repeating char --> check the length of the substring 

const findLongestSubstring = (string) => {  // "abbac"

    count = 0;   // keep track of max letters in the string (for longest substring)

    let map = new Map(); // works similarly to a hash 

    let StartingIdx = 0; // starts with the first char 

    for (let i = 0; i < string.length; i++) {  // loop through the entire string 

        let char = string[i]    // each char is a char 

        if (map.has(char) && map.get(char) >= StartingIdx) { 
            StartingIdx = map.get(char + 1);
        }

        // if the map contains that map, and it's greater or equal to 0 
        // then we add 1; which will take us to the next letter 

        map.set(char, i);   // setting that map to be ()
        // by setting this, you are adding the character the index that it's found at
        // adding the character to the substring, and you are adding the index
        // in order to keep track of it 

        count = (i + 1) - StartingIdx > count ? (i + 1) - StartingIdx : count; 


    }
    return count; 

}

console.log(findLongestSubstring('abbac'))

// 1. start by setting a counter
// 2. set up a new map 
// 3. starting index will be 0, where we will move throughout the string

// 4. set up a for loop 
// 5. change substring and starting index 


const contacts = new Map();  // initialize it like an object 

contacts.set( 
    'Jessi', {phone: '212-555-1234', address: '123 street'}
)

contacts.has('Jessi') // true 
