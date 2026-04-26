// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// NAVBAR ACTIVE
const links = document.querySelectorAll(".nav-menu a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
