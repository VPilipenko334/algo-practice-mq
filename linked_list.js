// Find out if a given linked list is a loop

// takes in a node as an argument for a given singly linked list 
// returns a boolean indicating whether the list contains a cycle 

// cycle: when a node's next poinnts back to a previous node in the list 
// which makes list non-linear and it will loop 

// singly linked list is a collection of nodes wherein each node has 2 parts:
// data and pointer 

// the list terminates with a point pointing at null;

function testListCycle(node) {

    let curentPointer = firstNode; 
    
    let nextPointer = firstNode; 

    while (curentPointer && nextPointer.next) {
        curentPointer = curentPointer.next;
        nextPointer = nextPointer.next.next; 

        if (nextPointer === curentPointer) {
            return true; 
        }
    }

    return false; 

}

// linked list operations are : insert and delete 



// THINGS TO NOTE: 
// If the current node is ALREADY in our set, we have a cycle; RETURN TRUE
// If the current node is NULL; we're at the end of the list; RETURN FALSE
// ELSE, throw the current node in our set and keep going 




// how to create a singly linked list: 

class Node {
    constructor(data, next = null) {
        this.data = data; 
        this.next = next; 
    }
}

class LinkedList {
    constructor(){
        this.head = null; 
    }
}

let list = new LinkedList();