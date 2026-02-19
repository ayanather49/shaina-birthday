document.addEventListener("DOMContentLoaded", function () {

  const musicBtn = document.getElementById("musicBtn");
  const music = document.getElementById("bgMusic");

  musicBtn.addEventListener("click", function () {
    music.play();
    musicBtn.style.display = "none";
  });

  /* COUNTDOWN */

  const birthday = new Date("February 20, 2026 00:00:00").getTime();
  const timer = document.getElementById("timer");
  const cakeSection = document.getElementById("cakeSection");

  const interval = setInterval(function () {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
      clearInterval(interval);
      document.querySelector(".countdown").style.display = "none";
      cakeSection.classList.remove("hidden");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  }, 1000);

  /* BLOW CANDLES */

  const blowBtn = document.getElementById("blowBtn");

  blowBtn.addEventListener("click", function () {

    document.querySelectorAll(".flame").forEach(f => f.style.display = "none");

    launchConfetti();
    launchPenguins();

    blowBtn.style.display = "none";
  });

  function launchConfetti() {
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  function launchPenguins() {
    for (let i = 0; i < 15; i++) {
      const penguin = document.createElement("div");
      penguin.classList.add("babyPenguin");
      penguin.innerHTML = "🐧";
      penguin.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(penguin);
      setTimeout(() => penguin.remove(), 4000);
    }
  }

  /* SECRET MESSAGE */

  const letterBtn = document.getElementById("letterBtn");
  const penguinScene = document.getElementById("penguinScene");
  const mainPenguin = document.getElementById("mainPenguin");
  const envelope = document.getElementById("envelope");
  const openEnvelope = document.getElementById("openEnvelope");
  const letterPaper = document.getElementById("letterPaper");

  letterBtn.addEventListener("click", () => {
    penguinScene.classList.remove("hidden");
  });

  mainPenguin.addEventListener("click", () => {
    penguinScene.classList.add("hidden");
    envelope.classList.remove("hidden");
  });

  openEnvelope.addEventListener("click", () => {
    envelope.classList.add("hidden");
    letterPaper.classList.remove("hidden");
  });

});
