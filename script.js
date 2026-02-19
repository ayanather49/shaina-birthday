document.addEventListener("DOMContentLoaded", function() {

    // MUSIC BUTTON
    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("bgMusic");

    musicBtn.addEventListener("click", function() {
        music.play();
        musicBtn.style.display = "none";
    });

    // SECRET MESSAGE
    const letterBtn = document.getElementById("letterBtn");
    const letter = document.getElementById("letter");

    letterBtn.addEventListener("click", function() {
        if (letter.style.display === "block") {
            letter.style.display = "none";
        } else {
            letter.style.display = "block";
        }
    });

    // COUNTDOWN
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

        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    }, 1000);

    // GIFT FUNCTION
    function showGift() {
        const gift = document.createElement("div");
        gift.id = "giftBox";
        gift.innerHTML = "🎁";
        document.body.appendChild(gift);

        gift.addEventListener("click", function() {
            gift.innerHTML = `
                <div style="font-size:90px;">🎂</div>
                <button id="blowBtn">Blow Candles 🕯️</button>
            `;

            document.getElementById("blowBtn").addEventListener("click", function() {
                gift.innerHTML = "🎂✨";
                launchConfetti();

                const message = document.createElement("h2");
                message.innerText = "Happy Birthday My Sweet Lil Penguin 🐧💕";
                document.body.appendChild(message);
            });
        });
    }

    // CONFETTI
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

});
