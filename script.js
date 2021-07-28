
const hamburger = document.querySelector('.hamburger-btn');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("open");
    hamburger.classList.toggle("rotate");
})