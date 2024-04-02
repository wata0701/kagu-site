const pagetop_btn = document.querySelector(".gotop");

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 500) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 500) {
        pagetop_btn.style.opacity = "0";
    }
}
