const content = document.querySelector(".bottom-content-container")

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY
    content.classList.toggle("active", scrollPos !== 0);
});