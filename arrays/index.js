/*

 ? Array

    - Denoted with square brackets []
    - INdicies start at 0
    - using a property called "length", we can find the sum of data stored

*/

let list = ["milk", "bread", "chicken", "coffee"];

console.log(list[1]);
console.log(list.length);

list[0]="chocolate milk";
console.log(list);

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8 ,true]];
console.log(typeof avengers); //* logs 'object', everything in JS is an object
console.log(avengers instanceof Array); //* true

/*
    Using a console.log
        - Target Bruce
        - Target true
        - using string interpolation, return "Hello, Nick" and "Hello Tony"
*/

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]}. Hello ${avengers[5][0]}`);


/*
? Reference
    - Important to note, when an array is created, it is being stored in memory
    - Assigning a new variable to initial array will reference the same array in memory
    - It can be imporant when working with immutable data, that we do not alter things in which or where they originate
*/

let myPubInfo = ["Amit", 32];
let myPrivateInfo = myPubInfo;
let socialSec = "555-55-5555";
myPrivateInfo.push(socialSec);
console.log(myPrivateInfo);
console.log(myPubInfo);  //! Has social sec # in it

//? Array Methods

//* .push(item to add to the end of the array)
let food = ["Pecan pie", "Shrimp", "Quesadilla","Cheese Cake", "HotDog"];
food.push("prosciutto");
console.log(food);

//* .splice (target position, how many removed, replaced with what)
food.splice(1,1,"tacos");
console.log("Splice:", food);

food.splice(1, 0, "Steak");
console.log("Spice 2:", food);

//* .slice()

let sliced = food.slice(1, 3);
console.log("Slice:", sliced);

//* .pop() - removes the last item in an aary
food.pop();
console.log("Pop", food);

//* .shift() - removes item from the beginning of the array
food.shift();
console.log("Shift", food);

//* unshift() - Add item to the start of array
food.unshift("Hamburger", "Salad");

console.log("Unshift", food);

//* .toString();

let rbg = ["red", "green", "blue"];
console.log(rgb.toString());