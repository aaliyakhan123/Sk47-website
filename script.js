
// Smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const targetId = this.getAttribute('href');

document.querySelector(targetId).scrollIntoView({

behavior: 'smooth'

});

});

});




// Scroll animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < window.innerHeight - 100){

section.style.opacity = "1";

section.style.transform = "translateY(0)";

}

});

});




// WhatsApp floating button create

const whatsappBtn = document.createElement("a");

whatsappBtn.href = "https://wa.me/919727255543";

whatsappBtn.innerHTML = "WhatsApp";

whatsappBtn.style.position = "fixed";

whatsappBtn.style.bottom = "20px";

whatsappBtn.style.right = "20px";

whatsappBtn.style.background = "gold";

whatsappBtn.style.color = "black";

whatsappBtn.style.padding = "15px";

whatsappBtn.style.borderRadius = "50px";

whatsappBtn.style.textDecoration = "none";

whatsappBtn.style.fontWeight = "bold";

document.body.appendChild(whatsappBtn);




// Navbar background change on scroll

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#000";

header.style.boxShadow = "0 0 10px gold";

}else{

header.style.boxShadow = "none";

}

});
