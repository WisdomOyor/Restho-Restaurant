// Preloader

document.addEventListener("DOMContentLoaded", function () {
  const loadingText = document.querySelector(".loading-text");

  let progress = 0;
  const interval = setInterval(function () {
      loadingText.textContent = progress + "%";
      progress++;

      if (progress > 100) {
          clearInterval(interval);
          
          // Hide the loader and reveal the content
          setTimeout(function () {
              document.querySelector(".loader").style.opacity = "0";
              document.querySelector(".loader").style.transform = "translateY(-100%)";
              document.querySelector(".content").style.display = "block";
              document.querySelector(".content").style.opacity = "1";
              document.querySelector(".content").style.transform = "translateY(0)";
          }, 1000); // Adjust this delay as needed
      }
  }, 20); // Adjust the interval to control the speed of the progress
});




// Navigation toggle on mobile

const nav = document.querySelector('nav');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

