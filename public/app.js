const title = document.querySelector('.title')
const ham = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const modal = document.querySelectorAll(".modal1")


// Mouseover event on landing page title


let newAns = "";

for(let i = 0; i < title.innerHTML.length; i++) {
    newAns += `<span onmouseover="change1(this)" onmouseout = "change2(this)">` + title.innerHTML.charAt(i) + `</span>`;
}
title.innerHTML=newAns;

function change1(x) {
    x.style.color = '#13C4A3';
}

function change2(x) {
    x.style.color= 'rgb(203, 243, 241)';
}


// Navigation menu 


function openNav() {
    document.body.classList.toggle('sidenav-active');
    ham.classList.toggle('active');
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
     });
     document.body.classList.toggle('noscroll'); 
  }
  
  function closeNav() {
    navLinks.classList.remove('open')
    ham.classList.remove('active')
    document.body.classList.remove('noscroll');
    document.body.classList.remove('sidenav-active');
  }
  
  ham.addEventListener('click', () => ham.classList.contains('active') ? closeNav() : openNav());
  
  closeNav();
  
  window.addEventListener('mouseup', function(event) {
    if(event.target != navLinks && event.target.parentNode != navLinks) {
      navLinks.classList.remove('open')
      ham.classList.remove('active')
      document.body.classList.remove('noscroll');
      document.body.classList.remove('sidenav-active');
    }
  })


  //About Section scrollTrigger


  gsap.registerPlugin(ScrollTrigger);

  const tlAbout = gsap.timeline({
    scrollTrigger : {
      trigger: ".about_section",
      // markers: {
      //   fontSize: '1.5rem',
      // },
      start: "top, 80%",
      end: "bottom, -95%",
      toggleActions: "play reset restart reset",
    }
  });

  tlAbout.to(".about_intro", {opacity: 1, x: 20, y: 20, duration: 1.5})
  tlAbout.to(".who_header", {opacity: 1, x: -30, duration: .5}, 1)
  tlAbout.to(".about-text", {opacity: 1, x: -30, duration: .5}, 1.25)
  tlAbout.to(".skills", {opacity: 1, x: -30, duration: .5}, 1.5)


  // Project Section Test


document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal1') {
      if (target.hasAttribute('data-target')) {
          var m_ID = target.getAttribute('data-target');
          document.getElementById(m_ID).classList.add('open1');
          e.preventDefault();
      }
  }

  // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal1') || target.classList.contains('modal1')) {
      var modal = document.querySelector('[class="modal1 open1"]');
      modal.classList.remove('open1');
      e.preventDefault();
  }
}, false);


// Image Slider


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("projectSlides");
  // let slides = [".projectSlides1", "projectSlides2"]
  
  let dots = document.getElementsByClassName("projectSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


  //Contacts section


  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Contact form authentication and submission

