
var readlinesync=require('readline-sync');

var score = 0;
var userName = readlinesync.question("What is your name?");
console.log(`Welcome ${userName} to DO YOU KNOW MANISH?`)

//play function
const play =(question,answer) =>{
  var userAnswer = readlinesync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!");
    score++;
  }else{
    console.log("Wrong!");
    score--
  }
   console.log(`Your current score is ${score}`);
   console.log("---------------------------------");
   
}

var quiz = [
   {
    question : "Where do I live?",
    answer : "bhubaneswar",
  },
   {
    question : "My favorite superhero would be?",
    answer : "batman",
  },
   {
    question : "What is my age?",
    answer : "22",
  },
   {
    question : "Whats my favorite food?",
    answer : "paneer",
  },
  {
    question : "Whats my favorite colour?",
    answer : "blue",
  },{
    question : "Whats my favorite place to hangout?",
    answer : "mountains",
  },
  {
    question : "I am a tea or a coffee person?",
    answer : "coffee",
  },{
    question : "Whats my favorite anime?",
    answer : "naruto",
  },
  {
    question : "Whats my favorite person?",
    answer : "none",
  },
  {
    question : "Whats my favorite game?",
    answer : "valorant",
  }
]

//loop
quiz.map(({question,answer})=>{
  play(question,answer);
})


//data for highscore
var highscore = [
  {
    name : "Manish",
    score : 10
  },
  {
    name : "Shiva",
    score : 9,
  },
  {
    name : "Janvi",
    score : 7
  }
]
console.log("your final score",score);
console.log("other highscores are : ",highscore);