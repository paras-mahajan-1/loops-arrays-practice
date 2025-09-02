console.log("connection working....")
// document.body.style.backgroundColor = "red"

// creating 100 random circles on the screen

// const btn = document.querySelector("button");
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// document.addEventListener("DOMContentLoaded", () => {
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
// })
// // checking the canvas height and canvas width
// console.log(`canvas-width: ${canvas.width}\ncanvas-height ${canvas.height}`)

// function random(number) {
//     return Math.floor(Math.random() * number);
// };

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < 100; i++) {
//         ctx.beginPath();
//         ctx.fillStyle = "rgb(255 0 0 / 50%";
//         ctx.arc(
//             random(canvas.width),
//             random(canvas.height),
//             random(50),
//             0,
//             endAngle = 2*Math.PI,
//         );
//         ctx.fill();
//     }
// }

// btn.addEventListener("click", draw)

// MDN DOCS loops first exercise done

// map and filter

// function toUpper(str) {
//     return str.toUpperCase()
// }

// let cats = ["Leopard", "Serval", "Jaguar", "Tiger" ,"Caracel", "Lion"];

// const upperCats = cats.map(toUpper)
// console.log(upperCats)

// const lcats = cats.filter((x) => x.split("")[0] === "L")
// console.log(lcats)

// calculating squares

// const btn = document.querySelector("button");

// function squares() {
//         const div = document.createElement("div");
//         document.body.appendChild(div)
//         // para.textContent = ""
//     for ( i = 2; i <= 10; i++ ) {
//         let para = document.createElement("p");
//         para.textContent = `${i} x ${i} = ${i*i}\n`;
//         div.appendChild(para)
//     }
//         const clearBtn = document.createElement("button");
//         clearBtn.innerText = "Clear! Try again";
//         clearBtn.addEventListener("click", () => div.parentNode.removeChild(div))
//         div.appendChild(clearBtn)
// }


// btn.addEventListener("click", squares)

// const cats = ["Peta", "Biggles", "Jasmine"];
// let myFavoriteCats = "My cats are called ";
// for (let i = 0; i < cats.length; i++) {
//     if ( i == cats.length-1) {
//         myFavoriteCats += `${cats[i]}.`
//         break
//     }
//     myFavoriteCats += `${cats[i]}, `;
// }
// console.log(myFavoriteCats)

// contact number search

// creating necessary html elements
//  -- label html element
// const label = document.createElement("label");
// label.setAttribute("for", "search");
// label.innerText = "Search by contact name: ";

// //  -- input html element
// const input = document.createElement("input");
// input.setAttribute("id", "search");
// input.setAttribute("type", "text")

// //  --  creating button
// const btn = document.createElement("button");
// btn.innerText = "Search";
// // btn.setAttribute("style", "padding: 5px; box-sizing: content-box")

// const para = document.createElement("p");
// // para.setAttribute("style", "border: 2px solid black; color: white")

// const importantElements = [label, input, btn, para];

// // creating appending elements from elements function

// function appendingElements(arr) {
//     for (const child of arr) {
//     document.body.append(child)
//     }
// }

// appendingElements(importantElements)

// let contacts = [
//   "Chris:2232322",
//   "Sarah:3453456",
//   "Bill:7654322",
//   "Mary:9998769",
//   "Dianne:9384975",
// ];


// function searchingNamePrintingName() {
//     para.textContent = "";
//     let searchName = input.value.toLowerCase();
//     input.focus();
//     for (let i = 0; i < contacts.length; i++) {
//         let contact = contacts[i].split(":");
//         let contactName = contact[0].toLowerCase();
//         let contactNumber = contact[1]

//         input.value = "";
//         if (searchName === contactName) {
//             para.textContent = `${contactNumber} is the number of ${contact[0]} `
//             break
//         }
//     }
//     if (para.textContent === "") {
//         para.textContent = `Contact not found`
//     }

// }

// btn.addEventListener("click", searchingNamePrintingName)

// Skipping iterations with continue

// const para = document.querySelector("p");
// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const div = document.createElement("div")
// document.body.append(div);
// para.parentNode.removeChild(para);

// function generateSquares(){
//     para.textContent = "Output: "
//     let number = input.value
//     for ( i = 2; i < number; i++) {
//         const para1 = document.createElement("p")
//         let sqRoot = Math.sqrt(i);
//         let check = Math.floor(sqRoot)
//         if (sqRoot === check) {
//             para1.textContent = (`${sqRoot} is the squareroot of the number: ${i}\n`)
//             div.append(para1)
//         } else {
//             continue
//         }
//     }
// }
// btn.addEventListener("click", generateSquares)

// const cats = ["Peta", "Biggles", "Jasmine"];
// let myFavoriteCats = "May cats are called ";

// let i = 0;
// while (i < cats.length) {
//     if ( i === cats.length-1) {
//         myFavoriteCats += `${cats[i]}.`
//     } else {
//         myFavoriteCats += `${cats[i]}, `
//     }

//     i++;
// }
// console.log(myFavoriteCats)

// const btn = document.createElement("button");
// btn.textContent = "Please start the countdown";
// const div = document.createElement("div")
// document.body.append(btn);
// document.body.append(div);

// btn.addEventListener("click", () => {
//     for (let i = 10; i >= 0; i--) {
//         const para = document.createElement("p");

//         if ( i === 0 ) {
//             para.textContent = `BlastOff!`
//             div.appendChild(para)
//             break
//         }
//         para.textContent = `${i}`;

//         div.appendChild(para)
//     }
// })

// const people = [
//   "Chris",
//   "Anne",
//   "Colin",
//   "Terri",
//   "Phil",
//   "Lola",
//   "Sam",
//   "Kay",
//   "Bruce",
// ];

// const refusedGuest = document.createElement("p");
// const acceptedGuest = document.createElement("p");

// refusedGuest.textContent = `Refused Guest: `
// acceptedGuest.textContent = `Accepted Guest: `

// document.body.appendChild(refusedGuest)
// document.body.appendChild(acceptedGuest)

// for (let i = 0; i < people.length; i++) {
//     if ((people[i].toLowerCase() === 'chris') || (people[i].toLowerCase() === 'anne')) {
//         refusedGuest.textContent += `${people[i]},`
//     } else {
//         acceptedGuest.textContent += `${people[i]},`
//     } 
// }


// for (let i = 0; i < 3; i++) {
//     inner : for (let j = 3; j < 6; j++) {
//         if (j === 5) {break inner}
//         console.log(j)
//     }

//     console.log(i)

// }


// for (let i = 0; i <= 10; i++) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }

// let i = 0;
// while ( i <= 0) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }

// creating prime number function


// function findingPrimeNumber() {
//     let number = 20;
//     let primeNumberArray = []
//     outer: for (let i = 2; i <= number; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 continue outer
//             }
//         }
//         primeNumberArray.push(i)
//     }
//     return primeNumberArray
// }

// console.log(findingPrimeNumber(20))


//  camelize the string 
//  for example:- "background-color" == "backgroundColor";

// function camelize(string) {
//     let arr = string.split("-");
//     let newArr = []
//     for (let i = 1; i < arr.length; i++) {
//         let firstLetter = arr[i].slice(0,1).toUpperCase();
//         let remainingLetters = arr[i].slice(1);
//         let final = firstLetter+remainingLetters;
//         newArr.push(final)
//     }
//     newArr.unshift(arr[0]);
//     let result = newArr.join("");
//     return result
// }

// function testingString() {
//     let arr = ["background-color", "list-style-image", "-webkit-transition"];
//     let checkArr = ["backgroundColor", "listStyleImage", "WebkitTransition"];
//     for (let i  = 0; i < arr.length; i++) {
//         if (camelize(arr[i]) === checkArr[i]) {
//             console.log(`${camelize(arr[i])} and this is correct`)
//         } else { console.log(`${("try again!")} and ${(camelize(arr[i]))}`)}
//     }
// }

// testingString()

// function camelize(str) {
//     return str
//     .split("-")
//     .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     ).join("")

// }
// console.log(camelize("-webkit-transition"))

// Filter range;

// function filterRange(arr, a, b) {
//     let counterArray = []
//     for (let number of arr) {
//         if ((number >= a) && (number <= b)){
//             counterArray.push(number)
//         }
//     }
//     return counterArray
// }

// function filterRange(arr, a, b) {
//     return arr.filter(item => {
//         return ((a <= item) && (item <= b))
//     })
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4))

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] >= a) && (arr[i] <= b)) continue
//         else {
//             let targetIndex = arr.indexOf(arr[i]);
//             arr.splice(targetIndex, 1, "a")
//         }
//     }
//     while (arr.includes("a")) {
//         let targetIndex = arr.indexOf("a");
//         arr.splice(targetIndex, 1)
//     }
//     return arr
// }

// console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4))

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// let arr = [5, 3, 8, 1]
// filterRangeInPlace(arr, 1, 4)
// alert(arr)

// sort in descending order

// let arr = [5, 2, 1, -10, 8];

// function sortInDescendingOrder(a, b) {
//     if (a>b) return -1;
//     if (a==b) return 0;
//     if (a<b) return 1;
// }
// arr.sort(sortInDescendingOrder)
// // arr.sort((a, b) => b-a)
// alert(arr)

// copy and sort array

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//     let newArray = arr.slice();
//     newArray.sort((a,b) => {
//         if (a>b) return 1;
//         if (a==b) return 0;
//         if (a<b) return -1;
//     });
//     return newArray
// }
// console.log(copySorted(arr));
// console.log(arr)

// Shuffle an array
// I'll be using Fisher Yates algorithm

// let arr = [1, 2, 3];

// function shuffle(arr) {

//     for (let i = 0 ; i < arr.length; i++) {
//         let randomIndex = Math.floor(Math.random(i)*(i+1));

//         [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
//     }

// }

// shuffle(arr);
// console.log(arr);

// filter unique array members

// function unique(strings) {
//     let counterArray = [];
//     for (let i = 0; i < strings.length; i++ ){
//         if (!counterArray.includes(strings[i])) {
//             counterArray.push(strings[i])
//         }
//     }
//     return counterArray
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(strings))
