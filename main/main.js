(function() {

    function scrollHorizontally(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('#frame').scrollLeft -= (delta*100);
        e.preventDefault();
    }
    if (document.querySelector('#frame').addEventListener) {
        document.querySelector('#frame').addEventListener("mousewheel", scrollHorizontally, false);
        document.querySelector('#frame').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        document.querySelector('#frame').attachEvent("onmousewheel", scrollHorizontally);
    }

})();