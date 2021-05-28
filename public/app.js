const title = document.querySelector('.title')
const ham = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

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

// Contact form submission

