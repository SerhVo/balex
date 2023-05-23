
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("activeTo");
  } else {
    toTop.classList.remove("activeTo");
  }
})
