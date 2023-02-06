const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});
