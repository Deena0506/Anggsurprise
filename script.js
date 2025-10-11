// 🌸 Navigation
function goToMemories() {
  window.location.href = "memories.html";
}
function goToMessages() {
  window.location.href = "messages.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // Smooth fade-in
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in";
    document.body.style.opacity = 1;
  }, 100);

  // 🎉 Confetti for home page
  if (document.querySelector("header")) {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
      confetti.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
      document.querySelector("header").appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }
  }

  // 🖼 Captions toggle in memories
  const galleryItems = document.querySelectorAll(".gallery-item img");
  galleryItems.forEach((img) => {
    img.addEventListener("click", () => {
      const caption = img.nextElementSibling;
      caption.style.display =
        caption.style.display === "block" ? "none" : "block";
    });
  });

  // 🔄 Rotating text (home page)
  const texts = ["Anggg!💖", "My Dear Best Friend! 💖", "Angelica! 💖"]; // change name
  const el = document.getElementById("changingText");
  if (el) {
    let idx = 0;
    el.textContent = texts[idx];

    function rotateText() {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");

      setTimeout(() => {
        idx = (idx + 1) % texts.length;
        el.textContent = texts[idx];
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
      }, 800);
    }

    setInterval(rotateText, 3000);
  }

  // 🎊 Continuous Confetti (optional for all pages)
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    // Random position & color
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Remove after falling
    setTimeout(() => confetti.remove(), 6000);
  }

  // Uncomment to enable continuous confetti everywhere:
  // setInterval(createConfetti, 200);

  // 💌 Message form (messages.html)
  const messageForm = document.querySelector("#messageForm");
  if (messageForm) {
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.querySelector("#userMessage");
      if (input.value.trim() !== "") {
        const newMsg = document.createElement("p");
        newMsg.textContent = "💖 " + input.value;
        newMsg.classList.add("new-message");

        const container = document.querySelector(".submitted-messages");
        container.appendChild(newMsg);

        newMsg.style.opacity = 0;
        newMsg.style.transform = "translateY(20px)";
        setTimeout(() => {
          newMsg.style.transition = "all 0.5s ease";
          newMsg.style.opacity = 1;
          newMsg.style.transform = "translateY(0)";
        }, 100);

        input.value = "";
      }
    });
  }
});
