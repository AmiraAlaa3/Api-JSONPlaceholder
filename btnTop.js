window.addEventListener("scroll", () => {
  const scrollToTopButton = document.getElementById("scrollToTopButton");
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }});

document.getElementById("scrollToTopButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
