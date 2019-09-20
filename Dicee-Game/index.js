document.querySelector(".bttn").addEventListener("click", function() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImg1 = "dice" + randomNumber1 + ".png";
  var randomDiceImg2 = "dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImg1);
  document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImg2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").textContent = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").textContent = "Player 2 Wins!🚩";
  } else {
    document.querySelector(".heading").textContent = "Draw!";
  }

});
