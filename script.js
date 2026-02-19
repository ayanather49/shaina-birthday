const birthday = new Date("February 20, 2026 00:00:00").getTime();
const timer = document.getElementById("timer");

const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        clearInterval(interval);
        document.querySelector(".countdown").style.display = "none";
        showGift();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s";
}, 1000);


// SECRET MESSAGE BUTTON
document.getElementById("letterBtn").addEventListener("click", function(){
    const letter = document.getElementById("letter");
    letter.style.display = letter.style.display === "block" ? "none" : "block";
});


// 🎁 Gift Reveal
function showGift() {
    const gift = document.createElement("div");
    gift.innerHTML = "🎁";
    gift.style.fontSize = "80px";
    gift.style.cursor = "pointer";
    gift.style.marginTop = "40px";
    gift.id = "giftBox";
    document.body.appendChild(gift);

    gift.addEventListener("click", openGift);
}

function openGift() {
    const gift = document.getElementById("giftBox");
    gift.innerHTML = `
        <div style="font-size:90px;">🎂</div>
        <button id="blowBtn">Blow Candles 🕯️</button>
    `;

    document.getElementById("blowBtn").addEventListener("click", function(){
        gift.innerHTML = "🎂✨";
        launchConfetti();

        const message = document.createElement("h2");
        message.innerText = "Happy Birthday My Sweet Lil Penguin 🐧💕";
        document.body.appendChild(message);
    });
}


// Confetti
function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "✨";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}
