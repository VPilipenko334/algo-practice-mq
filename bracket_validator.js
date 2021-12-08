// Check the balanced Brackets in an expression 
// Here are the clarifications: 

// (, {, [, are the openers
// ), }, ] are the closers 

// you are given a string containing brackets. Write a function that returns true if 
// an input string's openers and closers are properly nested. Return false otherwise. 


// ("{{}}]"), false

function Brackets(string) {   // " { { } } ] "
                            // 

    const openers = ["(", "{", "["];

    const closers = [")", "{", "]"]

    const matches = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let stack = []; // this is the stack we created 

    for (let i = 0; i < string.length; i++) {   // lenght === 5 // 4 indicies 
        //looping through each element in the string 

        let char = string[i];

        if (openers.includes(char)) {   // if the answer is yes; then we push it to the back of the stack
            stack.push(char); // 
        }   

                 //["]"]
            
        if (closers.includes(char)) {    
            const last = stack.pop();

            if (last !== matches[char]) {
                return false; 
            }
        }

    }

    return stack.length === 0; 

}

console.log((Brackets(""), true));
console.log((Brackets("{{{}}}"), true));
console.log((Brackets("{{{}}}]"), false));
console.log((Brackets("{"), false));
console.log((Brackets("{{}}]"), false));

// High level overview: 

// create a variable for the openers, calling it openers 
// create a variable for the closers, calling it closers
// object or hash map, in order to match the openers and the closers 

// loop through the string.length in order to see if there is match, if not,
// return false right away 

// because we are using a stack, we are using a LIFO approach
//last in first out, therefore if one of them doesn't match, we pop it off and cont.

// once we loop; we know that we need to take care of the false condition first
