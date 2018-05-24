var header = document.querySelector(".header_holder");

window.onscroll = function() {
  headerDown();
};

function headerDown() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("header_down");
  } else {
    header.classList.remove("header_down");
  }
}
