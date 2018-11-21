var hamburger = document.getElementById("hamburger");
var modal = document.getElementById("modal-outer");
var x = document.getElementById("nav-x");
var nav = [].slice.call(document.getElementsByClassName("nav"));

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

hamburger.addEventListener("click", showModal);

nav.forEach(function(elem) {
    elem.addEventListener("click", hideModal);
});

function showModal(e) {
    modal.classList.remove("hidden");
    hamburger.classList.add("hidden");
    x.addEventListener("click", hideModal);
}

function hideModal(e) {
    modal.classList.add("hidden");
    hamburger.classList.remove("hidden");
}
