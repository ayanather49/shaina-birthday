// Countdown
const birthday = new Date("February 20, 2026 00:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    timer.innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes ";
}, 1000);

// Hidden Letter
document.getElementById("letterBtn").addEventListener("click", function(){
    document.getElementById("letter").style.display = "block";
});
