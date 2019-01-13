var hamburger = document.getElementById("hamburger");
var modal = document.getElementById("modal-outer");
var x = document.getElementById("nav-x");
var nav = [].slice.call(document.getElementsByClassName("nav"));

/* showing modal on hamburger click, hiding modal on x click */
hamburger.addEventListener("click", showModal);

nav.forEach(function(elem) {
    elem.addEventListener("click", hideModal);
});

function showModal(e) {


    modal.classList.remove("opaque");

    modal.classList.remove("hidden");

    hamburger.classList.add("hidden");
    x.addEventListener("click", hideModal);
}

function hideModal(e) {
    modal.classList.add("opaque");
    hamburger.classList.remove("hidden");
    setTimeout(function() {
        modal.classList.add("hidden");
    }, 500);

}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
var header = document.getElementById("header");

window.onscroll = function() {
    if (window.pageYOffset < 20) {
        header.classList.remove("header-black");
    } else {
        header.classList.add("header-black");
        var currentScrollPos = window.pageYOffset;
        console.log('current', currentScrollPos);
        console.log('prev', prevScrollPos);
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
      } else {
            header.style.top = "-80px";
      }
    }

  prevScrollPos = currentScrollPos;
};


/* Carousel on principles page, rotate text boxes every 15sec or on dot click */
(function() {
    var principles = document.getElementsByClassName("three-principles");
    var dots = document.getElementsByClassName("dot");
    var timer;
    var i = 0;
    var max = 3;
    var inTransition = false;

    function move(next) {
        // move current box to left
        principles[i].classList.remove("onscreen");
        principles[i].classList.add("exit");
        // change active dot
        dots[i].classList.remove("active");
        inTransition = true;

        i++;
        if (i >= max) {
            i = 0;
        }

        // if next = number (passed by click on dot), set i to next
        if (!isNaN(next)) {
            i = next;
        }

        // change white background on next dot
        dots[i].classList.add("active");
        // move next box from stack on the right to screen
        principles[i].classList.add("onscreen");
        console.log(i);

        document.addEventListener("transitionend", function(e) {
            // move img back from left to stack on the right after transition end
            if (e.target.classList.contains("exit")) {
                e.target.classList.remove("exit");
                // call function again 2.5s after the transition ended
                timer = setTimeout(move, 15000);
                inTransition = false;
            }
        });

        /* turn HTML collection into array */
        var dotsArr = [].slice.call(dots);
        dotsArr.forEach(function(d, i) {
            d.addEventListener("click", function(e) {
                // make unclickable during transition
                if (inTransition == true) {
                    return;
                }
                if (e.target.classList.contains("active")) {
                    return;
                }
                clearTimeout(timer);
                move(i);
            });
        });
    }
    // call the function for the 1st time
    setTimeout(move, 15000);
    console.log(i);

})();
