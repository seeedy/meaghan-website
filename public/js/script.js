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
        // move next img from stack on the right to screen
        principles[i].classList.add("onscreen");
        console.log(i);

        document.addEventListener("transitionend", function(e) {
            // move img back from left to stack on the right after transition end
            if (e.target.classList.contains("exit")) {
                e.target.classList.remove("exit");
                // call function again 2.5s after the transition ended
                timer = setTimeout(move, 5000);
                inTransition = false;
            }
        });

        // document
        //     .getElementById("dot-box")
        //     .addEventListener("click", function(e) {
        //         if (!e.target.classList.contains("dot")) {
        //             return;
        //         }
        //         for (var i = 0; i < dots.length; i++) {
        //             if (dots[i] == e.target) {
        //                 break;
        //             }
        //         }
        //         clearTimeout(timer);
        //         e.target.classList.add("active");
        //     });

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
                console.log(i);
                move(i);
            });
        });
    }
    // call the function for the 1st time
    setTimeout(move, 5000);
    console.log(i);

})();
