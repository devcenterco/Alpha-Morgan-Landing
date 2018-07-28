var header = document.querySelector(".header_holder");
var headerPad = document.querySelector(".header-pad");

window.onscroll = function() {
  headerDown();
};

function headerDown() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("header_down");
    headerPad.classList.add("padded");
  } else {
    header.classList.remove("header_down");
    headerPad.classList.remove("padded");
  }
}
