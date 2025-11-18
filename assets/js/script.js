function toggleMenu() {
    const menu = document.querySelector(".menu");
    const icon = document.getElementById("menuIcon");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}
