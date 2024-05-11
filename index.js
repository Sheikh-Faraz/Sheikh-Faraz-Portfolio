  /* ------------------------------- TEXT ANIMAION ------------------------------- */

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    // translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 370],
    easing: "easeOutExpo",
    duration: 700,
    // delay: 100
    delay: 500
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

/* ------------------------------- PRELOADER ANIMATION ------------------------------- */

  document.addEventListener("DOMContentLoaded", function(event) {
    const navbar = document.querySelector('.nav-container');
    // const navbar = document.querySelector('.navbar');
    const preloader = document.querySelector('.loading');
    const content = document.querySelector('.Header');
    const About = document.querySelector('.About-container')
    const Stack = document.querySelector('.stack')
    const Project = document.querySelector('.Projects')
    const Contact = document.querySelector('.Contact')
    
    // Show preloader
    preloader.style.display = 'block';

    // Function to hide preloader and show content
    function showContent() {
      preloader.style.display = 'none'; // Hide preloader
      content.style.display = 'block'; // Show content
      navbar.style.display = 'block'; // Show navbar
        About.style.display = 'block'; // Show About
        Stack.style.display = 'block'; // Show Stack
        Project.style.display = 'block'; // Show Projects
        Contact.style.display = 'block'; // Show Contact
        
      }      
      // Event listener for when all content (including images, scripts, etc.) has been loaded
      window.addEventListener('load', function() {
        // var delayInSeconds = 2000;
      // setTimeout(showContent, delayInSeconds);
      showContent(); // Call the function to show content
    });
  });
  
/* ------------------------------- FADING IN FROM SIDE ------------------------------- */

const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

/* ------------------------------- DATE ------------------------------- */
const Text = document.getElementById("date")
const date = new Date();
Text.innerHTML = date.getFullYear()

/* ------------------------------- NAVBAR TOGGLE ------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const nav = document.querySelector(".navbar");
const navLists = document.querySelectorAll(".nav-lists")

navLists.forEach(function(navListItem) {
  navListItem.addEventListener('click', function() {
    var menu = document.getElementById('hamburger-menu');
      links.classList.toggle('active');
      nav.classList.toggle('nav-height');
      menu.classList.toggle('opened');
      menu.classList.toggle('closed');
  });
});
// Hamburger bar animation
function toggleMenu() {
  var menu = document.getElementById('hamburger-menu');
  links.classList.toggle("active");
  nav.classList.toggle("nav-height")
  menu.classList.toggle('opened');
  menu.classList.toggle('closed');
}