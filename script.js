
let diceTotal1 = 0
let diceTotal2 = 0

const rollDice1 = () => {
let die1 = document.getElementById("die1")
let status1 = document.getElementById("status1")
let d1 = Math.floor(Math.random()*6)+1;
diceTotal1 = diceTotal1 + d1
die1.innerHTML = d1
status1.innerHTML = "Player 1 TOTAL = "+diceTotal1

}




const rollDice2 = () => {
   let die2 = document.getElementById("die2")
   let status1 = document.getElementById("status1")
   let d2 = Math.floor(Math.random()*6)+1;
   diceTotal2 = diceTotal2 + d2
   die2.innerHTML = d2
   status2.innerHTML = "Player 2 TOTAL = "+diceTotal2
   
   }
   