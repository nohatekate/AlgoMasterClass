// function addUpTo(n){
//     count=0;
//     for(let i=1; i<=n; i++){
//         count += i;
//     }
//     return count;
// }
// console.log(addUpTo(100))

//second version
// function addUpTo(n){
//     return n * (n+1) / 2
// }
// // 6 * (6+1)/2
// console.log(addUpTo(6))


// function logAtLeast5(n){
//     for (var i = 1; i<= Math.max(5, n); i++){
//         console.log(i)
//     }
// }
// logAtLeast5(100)

// checking time
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds.`)

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

function addTwo(num1,num2){
    sum = num1 + num2
    return sum
}

console.log("addTwo", addTwo(4,5))