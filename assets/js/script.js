// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Scroll To Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Form Validation
const contactForm = document.getElementById("contact-form");

// Inisialisasi EmailJS dengan User ID
emailjs.init("0YGN_O_-_7H7Xkuy0"); // Ganti dengan User ID yang kamu dapatkan dari EmailJS

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi input
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Menyusun data yang akan dikirim
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Mengirimkan email menggunakan EmailJS
  emailjs
    .send("service_ot5qwt1", "template_47velux", templateParams) // Ganti dengan Service ID dan Template ID
    .then(
      function (response) {
        console.log("Success!", response.status, response.text);
        alert("Thank you! Your message has been sent.");
        contactForm.reset(); // Reset form setelah berhasil
      },
      function (error) {
        console.log("Failed...", error);
        alert("Sorry, something went wrong. Please try again.");
      }
    );
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Typing Animation Effect
const typingText = document.querySelector(".typing-text");
const phrases = ["Junior Web Developer", "Frontend Enthusiast", "Problem Solver"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    currentLetterIndex--;
  } else {
    currentLetterIndex++;
  }

  typingText.textContent = currentPhrase.slice(0, currentLetterIndex);

  if (!isDeleting && currentLetterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && currentLetterIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }
}
document.addEventListener("DOMContentLoaded", type);

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
