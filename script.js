const page = document.querySelector(".page");
const stage = document.getElementById("menuStage");
const button = document.getElementById("menuButton");
const card = document.getElementById("menuCard");
const links = document.querySelectorAll(".menu-link");

let open = false;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

const MAGNET_RADIUS = 180;
const MAGNET_STRENGTH = 0.18;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animate() {
  if (!open) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const distance = Math.hypot(dx, dy);

    if (distance < MAGNET_RADIUS) {
      const force = 1 - distance / MAGNET_RADIUS;
      targetX = dx * MAGNET_STRENGTH * force;
      targetY = dy * MAGNET_STRENGTH * force;
      button.classList.add("magnetic");
    } else {
      targetX = 0;
      targetY = 0;
      button.classList.remove("magnetic");
    }

    currentX += (targetX - currentX) * 0.11;
    currentY += (targetY - currentY) * 0.11;

    button.style.transform =
      `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0)`;
  }

  requestAnimationFrame(animate);
}

function openMenu() {
  if (open) return;
  open = true;

  currentX = 0;
  currentY = 0;
  targetX = 0;
  targetY = 0;

  page.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "Close menu");
  card.setAttribute("aria-hidden", "false");

  button.style.transform = "translate(-50%, -50%)";
}

function closeMenu() {
  if (!open) return;
  open = false;

  page.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Open menu");
  card.setAttribute("aria-hidden", "true");

  currentX = currentY = targetX = targetY = 0;
  button.style.transform = "translate(-50%, -50%)";
}

button.addEventListener("click", (event) => {
  event.stopPropagation();
  open ? closeMenu() : openMenu();
});

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    link.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(6px)" },
        { transform: "translateX(0)" }
      ],
      {
        duration: 320,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  });
});

document.addEventListener("click", (event) => {
  if (open && !stage.contains(event.target)) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

button.addEventListener("touchstart", () => {
  if (!open) button.style.transform =
    "translate(-50%, -50%) scale(.94)";
}, { passive: true });

button.addEventListener("touchend", () => {
  if (!open) button.style.transform =
    "translate(-50%, -50%)";
}, { passive: true });

animate();
