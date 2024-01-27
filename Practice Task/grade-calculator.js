const studentScore = 89;
if (studentScore>=90 && studentScore<=100) {
  console.log('A');
} 
else if (studentScore>=80 && studentScore<=89) {
  console.log('B');
}
else if (studentScore>=70 && studentScore<=79) {
  console.log('C');
}
else if (studentScore>=60 && studentScore<=69) {
  console.log('D');
}
else if (studentScore>=0 && studentScore<=59) {
  console.log('F');
}
else {
  console.log('Please enter a valid number');
}