/* ==========================================================================
   Mobile Navigation
   ========================================================================== */

var hamburger = document.getElementById("hamburger");
var navPanel = document.getElementById("nav-panel");
var navOverlay = document.getElementById("nav-overlay");
var navClose = document.getElementById("nav-close");
var navLinks = navPanel.querySelectorAll("a");

function openNav() {
    navPanel.classList.add("is-open");
    navOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    navPanel.classList.remove("is-open");
    navOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
navOverlay.addEventListener("click", closeNav);

navLinks.forEach(function(link) {
    link.addEventListener("click", closeNav);
});

/* ==========================================================================
   Scroll Header Hide/Show (GPU-accelerated)
   ========================================================================== */

var header = document.getElementById("header");
var prevScrollPos = window.pageYOffset;
var HEADER_BG_THRESHOLD = 20;

window.addEventListener("scroll", function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < HEADER_BG_THRESHOLD) {
        header.classList.remove("header-black");
        header.classList.remove("header-hidden");
    } else {
        header.classList.add("header-black");

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("header-hidden");
        } else {
            header.classList.add("header-hidden");
        }
    }

    prevScrollPos = currentScrollPos;
});

/* ==========================================================================
   IntersectionObserver Scroll Reveal
   ========================================================================== */

var REVEAL_THRESHOLD = 0.15;

document.body.classList.add("reveal-ready");

var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: REVEAL_THRESHOLD });

document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach(function(el) {
    revealObserver.observe(el);
});
