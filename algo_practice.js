////////////////////////////////
// function addUpTo(n){
//     count=0;
//     for(let i=1; i<=n; i++){
//         count += i;
//     }
//     return count;
// }
// console.log(addUpTo(100))

/////////////////////////////////
//second version
// function addUpTo(n){
//     return n * (n+1) / 2
// }
// // 6 * (6+1)/2
// console.log(addUpTo(6))

////////////////////////////////////
// function logAtLeast5(n){
//     for (var i = 1; i<= Math.max(5, n); i++){
//         console.log(i)
//     }
// }
// logAtLeast5(100)

///////////////////////////////
// checking time
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds.`)

///////////////////////////////
//practice  - write a function that takes two numbers and returns their sum 

//1. Can I restate the problem in my own words?
//"create function to solve for addition"

//2. What are the inputs that go into the problem?
//

//3. What are the outputs that should come from the solution to the problem?
//

//4. Can the outputs be determined by the inputs? 
// 

//5. How should I label the important pieces of data that are part of the problem?
//

// function addTwo(num1,num2){
//     sum = num1 + num2
//     return sum
// }

// console.log("addTwo", addTwo(4,5))

///////////////////////////////////
// Write a function which takes in a string and returns counts of each character in the string
//1. add each character in string
//2. inputs? String? spaces or symbols characters? 
//3. output should be a total number of characters
//4. ???
//5. ???
//EXAMPLES === charCount("aaaa"); {a:4}
// ==== charCount("hello"); {h:1, e:1, l:2, o:1}
//are we accounting for spaces, numbers, symbols????
//are we returning something for empty string or invalid input or nothing

// function charCount(str){
//     let count=0
//     for(let i = 0; i < str.length; i++){
//         count++
//     }
//     return count
// }
// //this will solve for spaces being characters and only tolal amount of characters
// console.log(charCount("I love you so much!"))


function charCount(str){
    str = str.toLowerCase()
    let result = {}
    //make object to return at end
    for(let i = 0; i<str.length; i++){
        let char=str[i]
        if(/[a-z0-9]/.test(char))
        if(result[char] > 0){
            result[char]++
        }else{
            result[char] = 1
        }
        
        }
        return result
    //if char is a key in object, add one to count, 
    //if char is not in object, add it and set value to 1
    // if char is (space, period, etc.) don't do anything
    //loop over str

    // return object at end
}
//this will solve for each character to lowercase in object. counts symbols and spaces == added regex in to take out spaces and symbols
console.log(charCount("The truth is out there. Or is it??!"))