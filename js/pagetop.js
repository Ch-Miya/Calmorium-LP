const button = document.querySelector(".page-top");

button.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        button.classList.add("is-active");
    } else {
        button.classList.remove("is-active");
    }
});
