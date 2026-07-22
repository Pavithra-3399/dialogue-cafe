// Sign-of-the-day rotator: cycles through the house glossary
// wherever a .sign-ticker element is present on the page.
const SIGNS = [
  { id: "sign-coffee",   word: "COFFEE",    def: "curled hand traces a C, like wrapping a mug" },
  { id: "sign-hello",    word: "HELLO",     def: "open palm raised beside the head" },
  { id: "sign-thankyou", word: "THANK YOU", def: "flat hand moves from chin outward" },
  { id: "sign-please",   word: "PLEASE",    def: "flat palm circles over the chest" },
  { id: "sign-more",     word: "MORE",      def: "fingertips of both hands tap together" },
  { id: "sign-friend",   word: "FRIEND",    def: "two index fingers hook, then swap" },
];

function initSignTicker() {
  const ticker = document.querySelector("[data-sign-ticker]");
  if (!ticker) return;

  const useEl = ticker.querySelector("use");
  const wordEl = ticker.querySelector(".sign-ticker-word");
  const defEl = ticker.querySelector(".sign-ticker-def");

  let i = 0;
  const paint = () => {
    const sign = SIGNS[i];
    useEl.setAttribute("href", `assets/icons.svg#${sign.id}`);
    wordEl.textContent = sign.word;
    defEl.textContent = `— ${sign.def}`;
  };
  paint();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    setInterval(() => {
      i = (i + 1) % SIGNS.length;
      ticker.style.opacity = 0;
      setTimeout(() => { paint(); ticker.style.opacity = 1; }, 200);
    }, 4200);
  }
}

function initNavDrawer() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-nav-drawer]");
  const closeBtn = document.querySelector("[data-nav-close]");
  if (!toggle || !drawer) return;

  const open = () => { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { drawer.classList.remove("open"); document.body.style.overflow = ""; };

  toggle.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initSignTicker();
  initNavDrawer();
  initReveal();
});
