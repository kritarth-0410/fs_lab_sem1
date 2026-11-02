//  While loop
// let i = 1;
// while (i <= 10){
//     console.log(2*i);
//     i++;
// }


// //  do-while loop (Runs at least once always)
// let j = 1;
// do {
//     console.log(2*j);
//     j++;
// } while(j <= 10);


//   Taking User Input 

// let username = prompt("Enter Your Username:"); // takes input form user in browser
// let age = prompt('Enter your age:');
// // alert(`My username is ${username} and my age is ${age}`)  // Display input in the browser itself
// alert(`my age is ${age}`)
// // console.log(typeof username);
// console.log(typeof age);



// // Number()
// age = Number(age);
// console.log(age);
// console.log(typeof age);


// parseInt
// let weight = prompt('Enter your weight:');
// weight = parseInt(weight);
// console.log(weight);
// console.log(typeof weight);


// // parseFloat
// let value = prompt('Enter float value:');
// value = parseFloat(value);
// console.log(value);
// console.log(typeof value);


// Math Functions

// console.log(Math.floor(12.9));
// console.log(Math.ceil(12.1));
// console.log(Math.round(12.5));
// console.log(Math.round(12.4));
// console.log(Math.round(12.6));
// console.log(Math.min(1,3,2,5,4,2));
// console.log(Math.max(1,3,2,5,4,2));

// const marks = [87, 66, 87, 90];
// console.log(Math.min(marks));



let total = 0 
let exp
do {
    let exp = prompt('enter your expense:')
    if (exp === 'done'){
        break;
    } else{
        total+= parseFloat(exp)
    }
} while (exp != 'done');
console.log(`total expense: ${total}`)