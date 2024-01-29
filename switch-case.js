// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// Problem 01: day of week

const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
  default:
    console.log('invalid');
}

// Problem 02: light condition

const lightCondition = false;

switch (lightCondition) {
  case true:
    console.log('Lights On 💡');
    break;

  case false:
    console.log('Lights Off 🔦');
    break;

  default:
    console.log('invalid');
    break;
}

