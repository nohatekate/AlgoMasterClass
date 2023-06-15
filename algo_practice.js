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


function logAtLeast5(n){
    for (var i = 1; i<= Math.max(5, n); i++){
        console.log(i)
    }
}
logAtLeast5(100)

// checking time
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000 } seconds.`)