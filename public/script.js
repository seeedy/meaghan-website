var hamburger = document.getElementById("hamburger");
var modal = document.getElementById("modal-outer");
var x = document.getElementById("nav-x");
var nav = [].slice.call(document.getElementsByClassName("nav"));


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
