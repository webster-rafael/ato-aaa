const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = (btn.closest(".modal").style.display = "none");
    body.classList.remove("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

// =================== menu mobile ===============

var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
window.onscroll = () =>{
this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".menuu");
navToggle = document.querySelector(".menu-btn");
if(navToggle)
{
   navToggle.addEventListener("click", () =>
   {
       navMenu.classList.toggle("active");
   })
}
// closing menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
   const navMenu = document.querySelector(".menuu");
   navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
/*===== Scroll Section Active Link =====*/

const Section=document.querySelectorAll('section[id]')
function scrollActive()
{
   const scrollY = window.pageYOffset
   Section.forEach(current => {
       const sectionHeight = current.offsetHeight
       const sectionTop = current.offsetTop - 50;
       sectionId = current.getAttribute('id')
       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
       {
           document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
       }
       else
       {
         document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
       }
   })
}