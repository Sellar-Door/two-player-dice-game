
// global variables to initially set total of dice rolls for each player to 0 

let diceTotal1 = 0
let diceTotal2 = 0


//function for player 1 which stores random number be†ween 1 and 6 and keeps a total count each time the player 1 button is clicked. 
//function also inputs text to HTML status1 and status2 elements if the d1 variable is a 1 or the total count is equal to or greater than 20

const rollDice1 = () => {
let status1 = document.getElementById("status1")
let d1 = Math.floor(Math.random()*6)+1;
diceTotal1 = diceTotal1 + d1
status1.innerHTML = "TOTAL "+diceTotal1
if(diceTotal1 >= 20){
   status1.innerHTML = "YOU WIN"
   status2.innerHTML = "YOU LOSE"
} if(diceTotal1 >= 20) {
   diceTotal1 = 0
} if(d1 == 1) {
   status1.innerHTML = "YOU LOSE"
   status2.innerHTML = "YOU WIN"
   diceTotal1 = 0
}

//  if statements inside rollDice1 function which determine which image is displayed depending on the d1 variable 

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

// This function performs the same tasks as the function above - rollDice1 - but for a second player 

const rollDice2 = () => {
   let status2 = document.getElementById("status2")
   let d2 = Math.floor(Math.random()*6)+1;
   diceTotal2 = diceTotal2 + d2
   status2.innerHTML = "Total "+diceTotal2
   if(diceTotal2 >= 20) {
      status2.innerHTML = "YOU WIN"
      status1.innerHTML = "YOU LOSE"
   }if(diceTotal2 >= 20) {
      diceTotal2 = 0
   }if(d2 == 1) {
      status2.innerHTML = "YOU LOSE"
      status1.innerHTML = "YOU WIN"
      diceTotal2 = 0
   }if(d2 == 1) {
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

// addEventListener to change the color of button1 when it is clicked 
   
document.getElementById("button1").addEventListener("click", function() {
      this.style.backgroundColor = "black";
      document.getElementById("button2").style.backgroundColor = "red";
   })

// addEventListener to change the color of button1 when it is clicked 

document.getElementById("button2").addEventListener("click", function() {
      this.style.backgroundColor = "black";
      document.getElementById("button1").style.backgroundColor = "red";
   })
