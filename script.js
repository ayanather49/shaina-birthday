document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       🎶 MUSIC BUTTON
    ========================== */

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("bgMusic");

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function () {
            music.play().catch(() => {});
            musicBtn.style.display = "none";
        });
    }


    /* =========================
       🐧 SECRET MESSAGE FLOW
    ========================== */

    const letterBtn = document.getElementById("letterBtn");
    const penguinScene = document.getElementById("penguinScene");
    const mainPenguin = document.getElementById("mainPenguin");
    const envelope = document.getElementById("envelope");
    const openEnvelope = document.getElementById("openEnvelope");
    const letterPaper = document.getElementById("letterPaper");

    if (letterBtn) {
        letterBtn.addEventListener("click", function () {
            penguinScene.style.display = "block";
        });
    }

    if (mainPenguin) {
        mainPenguin.addEventListener("click", function () {
            penguinScene.style.display = "none";
            envelope.style.display = "block";
        });
    }

    if (openEnvelope) {
        openEnvelope.addEventListener("click", function () {
            envelope.style.display = "none";
            letterPaper.style.display = "block";
        });
    }


    /* =========================
       ⏳ COUNTDOWN
    ========================== */

    const birthday = new Date("February 20, 2026 00:00:00").getTime();
    const timer = document.getElementById("timer");
    const giftArea = document.getElementById("giftArea");

    const interval = setInterval(function () {

        const now = new Date().getTime();
        const distance = birthday - now;

        if (distance <= 0) {
            clearInterval(interval);

            const countdownSection = document.querySelector(".countdown");
            if (countdownSection) countdownSection.style.display = "none";

            showGift();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (timer) {
            timer.innerHTML =
                days + "d " +
                hours + "h " +
                minutes + "m " +
                seconds + "s";
        }

    }, 1000);


    /* =========================
       🎁 GIFT + CAKE FLOW
    ========================== */

    function showGift() {

        const gift = document.createElement("div");
        gift.id = "giftBox";
        gift.innerHTML = "🐧🎁";
        gift.style.fontSize = "80px";
        gift.style.cursor = "pointer";
        gift.style.marginTop = "40px";

        giftArea.appendChild(gift);

        gift.addEventListener("click", function () {

            gift.innerHTML = `
                <div class="cake">
                    🎂
                    <div class="flame">🔥</div>
                    <div class="flame flame2">🔥</div>
                    <div class="flame flame3">🔥</div>
                </div>
                <button id="blowBtn">BLOW THE CANDLES 🕯️</button>
            `;

            const blowBtn = document.getElementById("blowBtn");

            blowBtn.addEventListener("click", function () {

                // Hide flames
                const flames = document.querySelectorAll(".flame");
                flames.forEach(function (flame) {
                    flame.style.display = "none";
                });

                launchConfetti();
                launchBabyPenguins();

                const message = document.createElement("h2");
                message.innerText = "Happy Birthday My Sweet Lil Penguin 🐧💕";
                message.style.marginTop = "20px";
                giftArea.appendChild(message);

                blowBtn.style.display = "none";
            });

        });
    }


    /* =========================
       ✨ CONFETTI
    ========================== */

    function launchConfetti() {
        for (let i = 0; i < 80; i++) {

            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }
    }


    /* =========================
       🐧 BABY PENGUINS
    ========================== */

    function launchBabyPenguins() {
        for (let i = 0; i < 15; i++) {

            const penguin = document.createElement("div");
            penguin.classList.add("babyPenguin");
            penguin.innerHTML = "🐧";

            penguin.style.left = Math.random() * window.innerWidth + "px";
            penguin.style.animationDuration = (Math.random() * 2 + 3) + "s";

            document.body.appendChild(penguin);

            setTimeout(() => penguin.remove(), 4000);
        }
    }

});
