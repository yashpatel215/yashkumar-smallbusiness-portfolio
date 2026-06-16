const CONTACT_EMAIL = "yashkumarpatel0408@gmail.com";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  header.classList.toggle("nav-active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    header.classList.remove("nav-active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const business = data.get("business").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();

  const subject = encodeURIComponent(`Visibility support inquiry from ${business}`);
  const body = encodeURIComponent(
    `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\n\nWhat I want help with:\n${message}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  formNote.textContent = "Your email app should open with a draft message ready to send.";
});
