// 1
// let number = 5;
// let i =1;
// console.log("multiplication table for:" ,number);
// while( i <= 10){
//     console.log(number ,"x", i, "=",number * i);
//     i++;
// }

// ans multiplication table for: 5
//  5 'x' 1 '=' 5
//  5 'x' 2 '=' 10
//  5 'x' 3 '=' 15
//  5 'x' 4 '=' 20
//  5 'x' 5 '=' 25
//  5 'x' 6 '=' 30
//  5 'x' 7 '=' 35
//  5 'x' 8 '=' 40
//  5 'x' 9 '=' 45
// 5 'x' 10 '=' 50

// 
// let num=  parseInt(prompt("enter uour number:"));
// let factorial=1;
// let i=1;
// while( i <= num){
//     factorial *=i;
//     i ++;
// }
// console.log("factorial of "+ num +" is: " + factorial);   

// ans --factorial of 12 is: 479001600

// 3
// let num=100;
// let sum = 0;
// let rem;
// do{
//    let= num * 10;
//    sum = sum +rem * rem * rem;
//    num=Math.floor(num /10);
//    if(sum == num){
//     console.log( "is a armstrong number");
//    }else{
//     console.log( "is a  not armstrong number");
//    }
// }
//    while(num > 0);

// ans 3 is a not armstrong number


// 4

// let num=  parseInt(prompt("enter uour number:"));
// let original=num;
// let reverse=0;
// while( num >= 0){
//      let reminder = num % 10;
//      reverse =(reverse * 10)+reminder;
//      num=Math.floor(num /10);
// }
//    if(original== reverse){
//     console.log( "is a pelindrom number");
//        } 
//        else{
//         console.log( "is a  not  pelindroam  number");
//        }
// ans pelinderom number

//  5
// let num=  parseInt(prompt("enter uour number of terms:"));
//  let a=0;
//  let b=1;
//  let i=1;
//  console.log("fibonacci series ");
//  while(i <=  num){
//     console.log(a);
//     let temp= a + b;
//     a = b;
//     b= temp;
//     i++;
//  }

// ans=fibonacci series 
//  0
//  1
//  2
//  3
//  5
//  8
//  13
// 21
// 34

// 6

// let total= 0;
// let i =0 ;
// while( i<= 30){
//     total += i;
//     i++;
// }
// console.log("total:" + total);

// ans=total:465

// 7

// let i=1;
// console.log("fizzbuzz from 1 to 100:");
// do{
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }else if( i % 3 === 0){
//         console.log("fizz");
//     }else if( i % 5  === 0){
//         console.log("buzz");
//     }else {
//         console.log(i);
//     }
//     i++;

// }while ( i<= 100);

// ans 99 fizz
// 100 buzz

// 8
// let result= "";
// for( let i=1; i <=10; i++){
//     result += i;
//     if( i < 10){
//         result = result +"-";
//     }
// }
// console.log(result);

// ans 1-2-3-4-5-6-7-8-9-10

// 9
// let sum  =0;
// let result="";
// for(let i= 1 ; i<=10 ; i++){
//     sum += i * i;
//     result += (i * i)
//     if( i < 10){
//         result += " + ";
//     }
// }
// result += " = " + sum;
// console.log(result);
 
// ans 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385

// 10
// 

// for( let i =1; i <= 5; i++){
//     let row ="";
//     for(let j = 5; j  >= 6 ; j--){
//         row += j+ " ";

//     }
//     console.log(row);
// }
// ans 
//  5 4
//  5 4 3
//  5 4 3 2
//  5 4 3 2 1

// 11

// let num = 1;
// for( let i =1; i<= 5; i++){
//     let row ="";
//     for(let j = 1; j  <= i  ; j++){
//         row += num + " ";
//         num++;
//     }
//     console.log(row);
// }

// ans 
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15