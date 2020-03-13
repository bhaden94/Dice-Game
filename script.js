
var player1WinCount = 0;
var player2WinCount = 0;

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1
                                              + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2
                                              + ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector(".p1").innerHTML = "🚩 Player 1";
    document.querySelector(".p2").innerHTML = "Player 2";
    document.querySelector(".p1Wins").innerHTML = "Wins: " + ++player1WinCount;
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector(".p1").innerHTML = "Player 1";
    document.querySelector(".p2").innerHTML = "🚩 Player 2";
    document.querySelector(".p2Wins").innerHTML = "Wins: " + ++player2WinCount;
  }
  else {
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector(".p1").innerHTML = "Player 1";
    document.querySelector(".p1").innerHTML = "Player 2";
  }
}
