// // 1

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join(','));
// console.log(myColor.join('+'));
// console.log(myColor.slice(0, 3).join(','));
// console.log(myColor[0]);
// console.log(myColor.slice(1, 3).join(','));
// let extendedColor = myColor.slice();
// extendedColor.push("orange");
// console.log(extendedColor.join(','));

// output=Red,Green,White,Black
//  Red+Green+White+Black
//  Red,Green,White
//  Red
//  Green,White
//  Red,Green,White,Black,orange

// 2
// let numbers=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i <numbers.length;i++){
//     sum+=numbers[i];
// }
// console.log("sum using for loop:", sum); 
// sum=0;
// numbers.forEach(num => {sum = num});
// console.log("sum using foreach loop:",sum);

// ans=sum using for loop: 15
// sum using foreach loop: 5  

// // 3
// let numbers = [1, 2, 3, 4, 5];
// let max = findMax(numbers);
// let min = findMin(numbers);
// console.log("Maximum value: ", max);
// console.log("Minimum value: ", min);
// function findMax(arr) {
//     return Math.max.apply(Math, arr);
//     }
//     function findMin(arr) {
//         return Math.min.apply(Math, arr);
//         }
// ans=Maximum value:  5
//  Minimum value:  1


// 4
// let myArray = ["Red", "Green", "White", "Black"];


// let ascii = myArray.map(num => num.toString().charCodeAt(0));
// console.log(ascii);

// ans=(4) [82, 71, 87, 66]

// // 5
// let NUM = [-1, 2, 3, -4, 5, -6];
// let positiveNumbers = NUM.filter(NUM => NUM >= 0);
// console.log(positiveNumbers);

// ans=3) [2, 3, 5]

//6 
// let arr = [2,5,6,3,8,9];
//   let square=arr.map(num => num * num);
// console.log(square);
// ans=
// (6) [4, 25, 36, 9, 64, 81]

// 7
//  let numbers = [12, 5, 0, 1, 5, 12, 19, 20];
// let myColor = ["Red", "Green", "White", "Black"];

// numbers.sort((a, b) => a - b);
// console.log("Numbers in ascending order: ", numbers);

// myColor.sort((a, b) => b.localeCompare(a));
// console.log("Colors in descending order: ", myColor);

//OUTPUT ==> Numbers in ascending order:  [0, 1, 5,
// 5, 12, 12, 19, 20]
// Colors in descending order:  [ "White", "Red", "Green", "Black]
// ans=ascending numbers: (8) [0, 1, 5, 5, 12, 12, 19, 20]
//  descending numbers: (8) [20, 19, 12, 12, 5, 5, 1, 0]
// ascending colors: (4) ['black', 'green', 'red', 'white']
// descending colors: (4) ['white', 'red', 'green', 'black']

// 8
// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
//     let filteredWords = words.filter(word => word.length >= 8);
//     console.log(filteredWords);
    //OUTPUT ==> ['Python', 'Javascript', 'Java', 'Ruby']

// 9
// let x1 = "airplane";
// console.log(x1[1]); // Output: "r"
// let x2 = "oxoxoxox";
// console.log(x2.replace(/x/g, "X")); // Output: "oXoXoXoX"
// let x3 = "A New Java Book";
// console.log(x3.toLowerCase()); 
// console.log(x3.toUpperCase()); 
// Output: "a new java book"
//  // Output: "A NEW JAVA BOOK"
//  oXoXoXoX
//  r

// 10
// let arr = [1, 2, 3, 4, 5];
// let value = parseInt(prompt("Enter a value to search: "));

// if (arr.includes(value)) {
//     console.log(value + " is found in the array");
// } else {
//     console.log(value + " is not found in the array");
// }

// ans=23 23 is not found in the array

// 11
// let myArray = [10, 20, 30, 40, 50];
// let valueToCheck = 30;

// console.log(myArray.includes(valueToCheck));
 // Output: true

//  12
// let myName = "John Doe"; // Replace with your name
// console.log("Name:", myName);
// console.log("Total Characters:", myName.length);

// ans=Name: John Doe
// Total Characters: 8

// 13
// let sentence = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// let replacedSentence = sentence.replace(/dog/g, "cat");

// console.log(replacedSentence);

// ans=// Output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// 14
// let str = "Hire the top 1% freelance developers";
// let wordsArray = str.split(" ").slice(0, 4); // Extract first 4 words
// console.log(wordsArray);
// Output: ["Hire", "the", "top", "1%"]

// 15
// let arr = ['5', 32, 'Daniel'];
// let strOutput = arr.join(",");
// console.log(strOutput);
// Output: "5,32,Daniel"