
let diceTotal1 = 0
let diceTotal2 = 0

const rollDice1 = () => {

let status1 = document.getElementById("status1")
let d1 = Math.floor(Math.random()*6)+1;
diceTotal1 = diceTotal1 + d1
status1.innerHTML = "Player 1 TOTAL = "+diceTotal1
if(diceTotal1 >= 20){
   diceTotal1 == 0
   status1.innerHTML = "YOU WIN"
   status2.innerHTML = "YOU LOSE"
}

if(d1 == 1) {
   image1.src = "img/dice1.png"
} if(d1 == 2) {
   image1.src = "img/dice2.png"
} if(d1 == 3) {
   image1.src = "img/dice3.png"
} if(d1 == 4) {
   image1.src = "img/dice4.png"
} if(d1 == 5) {
   image1.src = "img/dice5.png"
} if(d1 == 6) {
   image1.src = "img/dice6.png"
}
}



const rollDice2 = () => {
   let status2 = document.getElementById("status2")
   let d2 = Math.floor(Math.random()*6)+1;
   diceTotal2 = diceTotal2 + d2
   status2.innerHTML = "Player 2 TOTAL = "+diceTotal2
   if(diceTotal2 >= 20) {
      status2.innerHTML = "YOU WIN"
      status1.innerHTML = "YOU LOSE"
   }
   if(d2 == 1) {
      image2.src = "img/dice1.png"
   } if(d2 == 2) {
      image2.src = "img/dice2.png"
   } if(d2 == 3) {
      image2.src = "img/dice3.png"
   } if(d2 == 4) {
      image2.src = "img/dice4.png"
   } if(d2 == 5) {
      image2.src = "img/dice5.png"
   } if(d2 == 6) {
      image2.src = "img/dice6.png"
   }
   
   }
   
document.getElementById("button1").addEventListener("click", function() {
      this.style.backgroundColor = "grey";
      document.getElementById("button2").style.backgroundColor = "red";
   })

document.getElementById("button2").addEventListener("click", function() {
      this.style.backgroundColor = "grey";
      document.getElementById("button1").style.backgroundColor = "red";
   })
