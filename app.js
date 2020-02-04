let scores, roundScores, activePlayer, dice;

scores = [0, 0];
roundScores = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector(`#current-${activePlayer}`).innerHTML= `<em>${dice}</em>`;
document.querySelector(`#current-${activePlayer}`).textContent= dice;

let x=document.querySelector("#score-0").textContent;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click",function(){
    

});