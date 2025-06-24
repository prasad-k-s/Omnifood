const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

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
