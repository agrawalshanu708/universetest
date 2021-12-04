//console.log("shanu")
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log("How well you familiar with Universe? check it now")
console.log("*******************")
console.log("INSTRUCTION")
console.log("All answers in small letter")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")
var count = 0;
function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer == answer){
    console.log('Right one!')
    count = count+1;
    console.log("your score " +count)
    
    //console.log("***********")
  }else{
    console.log('Wrong dear, Keep going')
     count = count-1;
      console.log("your score " +count)
      console.log("correct answer-> " +answer)
    //console.log("***********")
  }
  //console.log(count)
  console.log("***********")
  }
  //console.log("s")
  
play("The 'Big Bang Theory' is related to? ", "universe");
play("The Milky Way is classified as ? " ,"spiral galaxy")
play("Who first predicted the existence of black holes?  " , "albert einstein")
play("Which is the brightest star outside the solar system? ", "sirius")
play("which planet is closest to the Sun?", "mercury")
console.log("YAH!!! YOU SCORED -> " + count)
console.log("HIGH SCORE")
console.log("Ambika : 5 " )
console.log("Aman : 4")


  

 