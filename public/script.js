var hamburger = document.getElementById("hamburger");
var modal = document.getElementById("modal-outer");
var x = document.getElementById("nav-x");
console.log(modal);

console.log("runinng!!!");

hamburger.addEventListener("click", showModal);

function showModal(e) {
    modal.classList.remove("hidden");
    hamburger.classList.add("hidden");
    x.addEventListener("click", hideModal);

}

function hideModal(e) {
    console.log("wheee");
    modal.classList.add("hidden");
    hamburger.classList.remove("hidden");

}
