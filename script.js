const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".header");

//Toggle mobile navigation
btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//Smooth scrolling
function smoothScrollTo(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  if ("scrollBehavior" in document.documentElement.style) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const mainNav = document.querySelector(".main-nav");
mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target.closest(".main-nav-link");
  if (!link) return;
  const href = link.getAttribute("href");
  smoothScrollTo(href);
  header.classList.toggle("nav-open");
});

const btns = document.querySelectorAll(".btn, .footer-logo, .header-logo");
btns.forEach((btn) => {
  const link = btn.getAttribute("href");
  if (!link) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (link === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else smoothScrollTo(link);
  });
});

//Sticky navigation

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
