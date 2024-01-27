/*
const age = 18;
if (age>=18) {
  console.log('You can vote');
} else {
  console.log('You can\'t vote');
}

// TERNARY 
const age = 18;
age>=18 ? console.log('You can vote') : console.log('You can\'t vote');



let price = 500;
const isLeader = true;

if (isLeader===true) {
  price = 0;
} else {
  price = price + 100;
}
console.log(price);
*/

// TERNARY 
let price = 500;
const isLeader = false;
price = isLeader === true ? 0 : price+1000;
console.log(price);