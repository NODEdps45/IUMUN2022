document.addEventListener("DOMContentLoaded", () => {
    let menuButton = document.getElementById("menu-toggle");
    menuButton.addEventListener("click", () => {
        document.getElementsByTagName("ul")[0].classList.toggle("open");
    });
});