var player1 = Math.floor( ( Math.random() * 6 ) + 1 );
document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + player1 + ".png");
var player2 = Math.floor( ( Math.random() * 6 ) + 1 );
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + player2 + ".png");

if (player1 > player2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins";
}else if (player1 === player2) { 
    document.querySelector("h1").textContent = "🤞It's Draw🤞";
}else {
    document.querySelector("h1").textContent = "Player 2 Wins 🏆";
}