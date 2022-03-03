// add navbar background when scrolled
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".arrow-float-container").addClass("show");
    } else {
      $(".arrow-float-container").removeClass("show");
    }
    if (this.scrollY > 500) {
      $(".float-container").addClass("show");
    } else {
      $(".float-container").removeClass("show");
    }
  });
});

// hide navbar in responsive mode when clicked
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false,
});
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    if (bsCollapse._isShown()) {
      bsCollapse.hide();
    }
  });
});

// banner mobile fullscreen problem
function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}

window.addEventListener("resize", appHeight);
appHeight();
