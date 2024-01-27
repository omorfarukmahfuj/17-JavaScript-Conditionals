const age = 60;
const student = false;
const regularTicketFare = 800;


if (age < 10) {
  console.log('Ticket is free');
}

else if (age >= 60) {
  console.log(regularTicketFare * 15 / 100);
}

else if (student) {
  console.log(regularTicketFare * 50 / 100);
}

else {
  console.log(regularTicketFare);
}