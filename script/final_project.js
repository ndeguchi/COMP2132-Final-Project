/*
Natsu Deguchi
Final Project
*/

//Popup functions

const winPopup          = document.getElementById('winPopup');
const lostPopup         = document.getElementById('lostPopup');
const drawPopup         = document.getElementById('drawPopup');

const closeWinPopup     = document.getElementById('closeWinPopup');
const closeLostPopup    = document.getElementById('closeLostPopup');
const closeDrawPopup    = document.getElementById('closeDrawPopup');

const ruleBtn           = document.getElementById('ruleBtn');
const rulePopup         = document.getElementById('rulePopup');
const closeRulePopup    = document.getElementById('closeRulePopup');

rulePopup.style.display = 'none';
winPopup.style.display  = 'none';
lostPopup.style.display = 'none';
drawPopup.style.display = 'none';

ruleBtn.addEventListener('click', function(){

    $(".aside").css({opacity:'0'});
    $(".aside").stop().animate({opacity:'1'},1000);
    rulePopup.style.display = 'block';

});

closeRulePopup.addEventListener('click', function(){
    
    $(".aside").css({opacity:'1'});
    $(".aside").stop().animate({opacity:'0'},1000);

});

closeWinPopup.addEventListener('click', function(){
    
    $("aside").css({opacity:'1'});
    $("aside").stop().animate({opacity:'0'},1000);

});

closeLostPopup.addEventListener('click', function(){
    
    $("aside").css({opacity:'1'});
    $("aside").stop().animate({opacity:'0'},1000);

});

closeDrawPopup.addEventListener('click', function(){
    
    $("aside").css({opacity:'1'});
    $("aside").stop().animate({opacity:'0'},1000);

});



//Dice game function

const currentScore1    = document.getElementById("currentScore1");
const currentScore2    = document.getElementById("currentScore2");
const totalScore1      = document.getElementById("totalScore1");
const totalScore2      = document.getElementById("totalScore2");

const dice1            = document.getElementById('dice1');
const dice2            = document.getElementById('dice2');
const dice3            = document.getElementById('dice3');
const dice4            = document.getElementById('dice4'); 

const btn_roll         = document.getElementById("btn_roll");
const button           = document.querySelector("button");
const newGame          = document.getElementById('newGame');

button.addEventListener("click", rollDices);

newGame.addEventListener('click', function() {
    location.reload();
});

let p1TotalScore = 0;
let p2TotalScore = 0;

let counter = 0;

function rollDices(){

  let p1CurrentScore = "";
  let p2CurrentScore = "";

    rand1 = Math.round(Math.random()*5) + 1;
    rand2 = Math.round(Math.random()*5) + 1;
    rand3 = Math.round(Math.random()*5) + 1;
    rand4 = Math.round(Math.random()*5) + 1;

    dice1.src = "images/dice" + rand1 + ".jpg";
    dice2.src = "images/dice" + rand2 + ".jpg";
    dice3.src = "images/dice" + rand3 + ".jpg";
    dice4.src = "images/dice" + rand4 + ".jpg";

    if(rand1 === 1){
        p1CurrentScore = 0;
    }else if(rand2 === 1){
        p1CurrentScore = 0;
    }else{
        p1CurrentScore = rand1 + rand2;
    }
    if(rand1 === rand2){
        p1CurrentScore = (rand1 + rand2) * 2;
    }

    if(rand3 === 1){
        p2CurrentScore = 0;
        
    }else if(rand4 === 1){
        p2CurrentScore = 0;
    }else{
        p2CurrentScore = rand3 + rand4;
    }
    if(rand3 === rand4){
        p2CurrentScore = (rand3 + rand4) * 2;
    }

    p1TotalScore = p1TotalScore + p1CurrentScore;
    p2TotalScore = p2TotalScore + p2CurrentScore;
  
    currentScore1.innerHTML = `${p1CurrentScore}`;
    totalScore1.innerHTML   = `${p1TotalScore}`;
    currentScore2.innerHTML = `${p2CurrentScore}`;
    totalScore2.innerHTML   = `${p2TotalScore}`;
    
    counter++;
    
    if(counter >= 3){
      btn_roll.disabled = true;
      
      if(p1TotalScore > p2TotalScore){

        $("aside").css({opacity:'0'});
        $("aside").stop().animate({opacity:'1'},1000);
        winPopup.style.display = 'block';

      }else if(p2TotalScore > p1TotalScore){

        $("aside").css({opacity:'0'});
        $("aside").stop().animate({opacity:'1'},1000);
        lostPopup.style.display = 'block';

      }else{

        $("aside").css({opacity:'0'});
        $("aside").stop().animate({opacity:'1'},1000);
        drawPopup.style.display = 'block';
      }
    }
}


