// // Function for cube of a number

// function cube(){
//     let x = parseInt(prompt('Enter a no.:'))
//     return x ** 3
// }
// alert(cube());
// // console.log(cube())


// Adult check

// 1
// function isAdult(){
//     let ageof = parseInt(prompt("Enter Age: "));
//     let adult;

//     if (ageof >= 18){
//         adult = true;
//     }
//     else{
//         adult = false;
//     }
//     return adult
// }   

// alert(isAdult());

// 2
// function isAdult(age){
//     if (age >=18){
//         return true
//     } else{
//         return false
//     }
// }
// let n = parseInt(prompt('Enter a Number: '))
// let isAllowed = isAdult(n); // function call
// alert(isAllowed); // display of function output
// // alert(isAdult(n))


//  Calculate BMI

// // 1
// function bmi(){
//     let weight = Number(prompt('Enter weight: '))
//     let height = Number(prompt('Enter height: '))
//     let bmiis = weight / (height ** 2)
//     return bmiis
// }
// console.log(bmi())

// // 2
// function BMI(weight, height){
//     let bmiis = weight / (height ** 2)
//     return bmiis
// }
// console.log(BMI(70, 1.75))



// function gradefrommarks(marks){
//     if (marks >=90){
//         return 'A'
//     }
//     else if (marks >= 75){
//         return 'B'
//     }
//     else if (marks >= 50){
//         return 'C'
//     }
//     else{
//         return 'F'
//     }
// }
// // output 1
// console.log(gradefrommarks(90))

// // output way 1
// let mark = parseInt(prompt("Enter your Mark:"))
// let grade = gradefrommarks(mark);
// alert(grade)




// //  Applying Discount

// function applyDiscount(price, ismember = false){
//     let total = price;
//     if (ismember){
//         const disc = price*0.1
//         total = price - disc
//     }
//     return total
// }
// console.log(applyDiscount(100, true))
// console.log(applyDiscount(100)) 





// //  Counting Vowels

// function countvowels(words){
//     let count = 0
//     let i = 0
//     let word = words.toLowerCase()
//     while (i <= word.length){
//         if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') 
//             count+=1
//             i+=1;
//     }
//     return count
// }
// // 1
// console.log(countvowels('OrAnGE aPPLE'))
// 2
// let text = prompt("Entrer word: ")
// let res = countvowels(text)
// alert(countvowels(text))





