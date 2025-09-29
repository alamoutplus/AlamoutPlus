const cup = document.getElementById("cup");
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Move cup left/right
document.addEventListener("keydown", (e) => {
  const cupLeft = cup.offsetLeft;
  if (e.key === "ArrowLeft" && cupLeft > 0) {
    cup.style.left = cupLeft - 20 + "px";
  } else if (e.key === "ArrowRight" && cupLeft < gameContainer.offsetWidth - cup.offsetWidth) {
    cup.style.left = cupLeft + 20 + "px";
  }
});

// Create falling beans
function createBean() {
  const bean = document.createElement("div");
  bean.classList.add("bean");
  bean.style.left = Math.random() * (gameContainer.offsetWidth - 20) + "px";
  gameContainer.appendChild(bean);

  let beanTop = 0;
  const fallInterval = setInterval(() => {
    beanTop += 5;
    bean.style.top = beanTop + "px";

    // Collision detection
    const beanRect = bean.getBoundingClientRect();
    const cupRect = cup.getBoundingClientRect();

    if (
      beanRect.bottom >= cupRect.top &&
      beanRect.left >= cupRect.left &&
      beanRect.right <= cupRect.right
    ) {
      score++;
      scoreDisplay.textContent = "Score: " + score;
      bean.remove();
      clearInterval(fallInterval);
    }

    // Remove bean if it falls out
    if (beanTop > gameContainer.offsetHeight) {
      bean.remove();
      clearInterval(fallInterval);
    }
  }, 30);
}

// Drop beans every second
setInterval(createBean, 1000);
