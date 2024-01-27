myScore = 85;
friendScore = 80;

if (myScore > 80) {

  if (friendScore >= 80) {
    console.log('Let\'s go for a lunch.');
  }
  else if (friendScore < 80 && friendScore >= 60) {
    console.log('good luck next time.');
  }
  else if (friendScore < 60 && friendScore >= 40) {
    console.log('message unseen.');
  }
  else if (friendScore) {
    console.log('blocked');
  }
}

else {
  console.log('I am going home to sleep and may act sad.');
}