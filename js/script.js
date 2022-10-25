
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
    const links = document.querySelector(".links");
    const overlay = document.querySelector(".overlay");

    links.classList.toggle("sticky");
    overlay.classList.add("sticky");
}

window.addEventListener("scroll", function (){ 
    const navbar = document.querySelector("#navigation");
    navbar.classList.toggle("sticky", window.scrollY > 150)
})




const overlay = document.querySelector(".overlay");
overlay.onclick = function() {
    const links = document.querySelector(".links");
    links.classList.remove("sticky");
    overlay.classList.remove("sticky");
}