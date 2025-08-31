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

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const refusedGuest = document.createElement("p");
const acceptedGuest = document.createElement("p");

refusedGuest.textContent = `Refused Guest: `
acceptedGuest.textContent = `Accepted Guest: `

document.body.appendChild(refusedGuest)
document.body.appendChild(acceptedGuest)

for (let i = 0; i < people.length; i++) {
    if ((people[i].toLowerCase() === 'chris') || (people[i].toLowerCase() === 'anne')) {
        refusedGuest.textContent += `${people[i]},`
    } else {
        acceptedGuest.textContent += `${people[i]},`
    } 
}














