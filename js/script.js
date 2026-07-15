const header = document.getElementById("header");
const topBtn = document.getElementById("topBtn");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});