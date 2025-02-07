// Google Analytics
(function () {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID";
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "YOUR_TRACKING_ID");
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
});

// Get the header element
const header = document.querySelector("header");

// Event listener for scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    // When at the top of the page, make header transparent
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    // When the user starts scrolling down, set the background color
    header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  }
});
