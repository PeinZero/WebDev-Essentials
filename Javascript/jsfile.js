// CONSOLE 
// console.log("using console.log\n");
// console.clear();
// console.error("fucking hell ! this is a error");
// console.warn("chil scenes dw just a warning");

// console.clear();  to clear the console 
// check mdn console to see all mehtods.

//------------------------------------------------------------------------------//
// var, (let (var equivalent , values variable) , const (values constant)) --> ES6

// const age1 = 10 ;
// // age1 = 15; //this is an error
// console.log(age);

// let age2 = 14;
// age2 = 19; // no error
// console.log(age2);

//--------------------------------------------------------------------------------//
// -----------------------------DATA TYPES---------------------------------------//
// strings, numbers , boolean , null , undefined , symbols (added in ES6)

// const number1 = 5;
// const name = "peinzero"; // string
// const isCool = true;
// const numx = null;
// const numy = undefined;
// let numz; // const must be initialized so have used let

// console.log(typeof(number1)); // float,decimal,integer = number
// console.log(typeof(name));
// console.log(typeof(isCool));
// console.log(typeof(numx)); // display object , bug in JS.
// console.log(typeof(numy));
// console.log(typeof(numz));

//---------------------------------------------------------------------------//
// CONTINUING STRINGS

// let name = 'peinzero';
// const isCool = true;
// console.log(name+ ' isCool:' + " " + isCool); // concatenation old mehtod

// str = `${name} isCool: ${isCool}`; // template strings ES6
// console.log(str);


// search net if want string functions
//s.toUpperCase() , s.toLowerCase() , s.substring(0,5) s.length; etcs

//--------------------------------------------------------------------------------//
//--------------------------------ARRAYS-----------------------------------------//

// const arr = new Array (); empty array can be initialised like this.
// const arr = new Array (1,2,3); array with 3 elements [1,2,3] can be initialised like this.

// arr = ['a' , 1 , 2.0 , true]
// // console.log(arr.length);
// console.log(arr);
// arr.push('b');   // add to last element
// console.log(arr);
// arr.unshift('x'); // add to first index
// console.log(arr);
// arr.pop(); // remove last element
// console.log(arr);
// console.log(Array.isArray(arr)); // check whether array or not
// console.log(arr.indexOf('x'));
// console.log(arr.includes(2.0));
// alert(arr)

//--------------------------------------------------------------------------------//
//--------------------------------Object Literals (Dict)-----------------------------------------//

// const me = {
//     firstname: "Mahad",
//     lastname: "Khalid",
//     have: ['Pc' , 'laptop'],
//     address: {
//         house: 1282,
//         street: 8,
//         area: 'mehmoodabad # 6'
//     }
// }

// console.log(me)
// console.log(me.have[1])
// console.log(me.address.area)

// const { firstname , have, address: {area}} = me // pulling out stuff from object 
// // no need to write person. now 
// console.log(firstname)
// console.log(have[0])
// console.log(area)  

// me.email = "mahadzx@gmail.com" // add new stuff in the object
// console.log(me)


//--------------------------------------------------------------------------------//
//--------------------------------Array of Ojects Literals and JSON------------------//

// const arr = [
//     {
//         id: 1,
//         name: 'mahad'
//     },
//     {
//         id: 2,
//         name: 'atif'
//     }
// ]

// // JSON Equivalent (kinda) of above
// // [
// //     {
// //        "id": 1,
// //        "name": "mahad"
// //     },
// //     {
// //        "id": 2,
// //        "name": "atif"
// //     }
// //  ]

// const arrJSON = JSON.stringify(arr);
// console.log(arrJSON); //same result with this


//---------------------------------------------------------------------------//
//---------------------------looping thru array---------------------------//

// const arr = [
//     {
//         id: 1,
//         name: 'mahad',
//         nigga: false
//     },
//     {
//         id: 2,
//         name: 'atif',
//         nigga: true
//     }
// ]

// Mehtod 1
// for (let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i].name)
// }

// Mehtod 2
// for (let a of arr) {
//     console.log(a)
//     console.log(a.name)
// }

//--------HIGH ORDER ARRAY MEHTODS: forEach,map
//Mehtod 3
// arr.forEach(function(a) {
//     console.log(a.name)
//     console.log(a)
// });

//Mehtod 4
// const arrStuff = arr.map(function(a) {
//     return a.name;   //returns an array of a.name i.e ['mahad','atif']
// });
// console.log(arrStuff);

// Mehtod 5
// const arrStuffx = arr.filter(function(a) {
//     return a.nigga === true; // will return the entire object
// });
// console.log(arrStuffx);

//some legendary stuff
// const arrStuffy = arr.filter(function(a) {
//     return a.nigga === true;  // will return the entire object
// }).map(function(a){
//     return a.name  // from that object will return only name
// });

// console.log(arrStuffy);
//WHILE LOOP
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i].name)
//     i++
// }

//---------------------------------------------------------------------------//
//-------------------------------CONDITIONALS--------------------------------//
// same syntax like c++ 
// && AND   || OR 

// const x = 10
// if (x == 10){
//     console.log("10 = 10 : true ")
// }else if (x > 10) {
//     console.log("x is greater than than 10")
// }else {
//     console.log("x is less than 10")
// }

// // == vs ===
// if (x == "10"){
//     console.log("10 = \"10\" : true even though number is being compared to string")
// }

// if (x === "10"){
//     console.log("10 = \"10\" : false as now we have used === which also compares the data type") 
// }

// // ternary operator 
// const y = x === 10? 'red' : 'blue'
// console.log(y)

// Switch
// let color = 'blue';

// switch(color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:  
//     console.log('color is not red or blue')
//     break;
// }

//---------------------------------------------------------------------------//
//-------------------------------ES6 CLASSES--------------------------//

// class Person {
//     constructor(firstName, lastName, dob) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.dob = new Date(dob);
//     }
  
//     // Get Birth Year
//     getBirthYear() {
//       return this.dob.getFullYear();
//     }
  
//     // Get Full Name
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
  
//   const person1 = new Person('John', 'Doe', '7-8-80');
//   console.log(person1.getBirthYear());


//---------------------------------------------------------------------------//
//-------------------------------Element Selectors--------------------------------//

// Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//---------------------------------------------------------------------------//
//-------------------------------MANIPULATING THE DOM--------------------------------//

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//---------------------------------------------------------------------------//
//-------------------------------EVENTS--------------------------------//

// Mouse Event
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', (e) => {
//   document.querySelector('.items').children[2].innerText = nameInput.value;
// });


//---------------------------------------------------------------------------//
//-------------------------------USER FORM SCRIPT--------------------------------//


// // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    // msg.classList.add('error');
    // msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    // setTimeout(() => msg.remove(), 3000);
//   } else {
    // Create new list item with user
    // const li = document.createElement('li');

    // Add text node with input values
    // li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    // userList.appendChild(li);

    // Clear fields
    // nameInput.value = '';
    // emailInput.value = '';
//   }
// }

// ============================================================================= //
// ============================================================================= //
// ============================================================================= //


// const me = {
//     name: "mahad" ,
//     peinzero: true,
//     age: 21,
//     have: ['pc','laptop','phone'],
//     nigaa: null,
//     address: {
//         street: 8,
//         houseNO: 1282,
//         area: "Mehmoodabad no 6",
//         city: "Karachi",
//         country: "Pakistan"

//     }
// }

// console.log(me)
// meJSON = JSON.stringify(me)
// meParsed = JSON.parse(meJSON) // back to object from JSON format

// console.log(meParsed.name)

// let temp = '<li>' + me.name + '</li>';
// console.log(temp)
// const domx = document.getElementById("mylist")
// domx.innerHTML = temp

// let node = document.createElement("LI")
// let textnode = document.createTextNode("ammar")
// node.appendChild(textnode)
// domx.appendChild(node)
