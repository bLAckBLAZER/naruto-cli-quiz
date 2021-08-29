var readlineSync = require('readline-sync');
const chalk = require('chalk');
 
// Wait for user's response.

var userName = readlineSync.question(chalk.bgRed('Please enter your name? '));
console.log('Hi ' + userName + '!');

questionOne = {
  question: "What is Naruto's last name?",
  answer: "uzumaki"
}
questionTwo = {
  question: "Who is Naruto's dad? (Spoiler Alert)",
  answer: "minato"
}
questionThree = {
  question: "Which team was Naruto part of?",
  answer: "team 7"
}
questionFour = {
  question: "Who is Sasuke's brother?",
  answer: "itachi"
}
questionFive = {
  question: "Who died when Itachi recieved his Mangekyo Sharingan?",
  answer: "shisui"
}
questionSix = {
  question: "Who is third hokage's grandson?",
  answer: "konohamaru"
}
questionSeven = {
  question: "What is the name of First Hokage?",
  answer: "hashirama"
}
questionEight = {
  question: "Who invented teleportation jutsu?",
  answer: "tobirama"
}
questionNine = {
  question: "Who is the strongest taigutsu user according to Uchiha Madara?",
  answer: "might guy"
}
questionTen = {
  question: "Who invented Rasengan?",
  answer: "minato"
}

topScorers = [
  {
    name:"Omkar",
    score: 10
  },
  {
    name:"Naruto",
    score:10
  },
  {
    name:"Kakashi",
    score:7
  },
  {
    name:"Sakura",
    score:0
  }
]

questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
score = 0;
for( let i=0; i< questions.length; i++){
  var receivedAns = readlineSync.question(questions[i].question+" ");
  if (receivedAns.toLowerCase() === questions[i].answer){
    console.log("Correct!");
    score+=1
  }
  else{
    console.log('Wrong Answer! Correct answer is: '+questions[i].answer);
    
  }
  // console.log("Current score: "+score)
}

console.log("Your total score: " + score);

console.log()
console.log("******************************")
console.log("You have beaten:");
for(let i=0;i<topScorers.length;i++){
  if (topScorers[i].score <=score){
    console.log(topScorers[i].name)
  }
}
console.log("******************************")

