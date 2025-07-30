const mobileMenuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('active');
    mobileMenuButton.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
}

mobileMenuButton.addEventListener('click', toggleMenu);

window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("load", () => {
    const element = document.querySelector(".text-primary")
    const text = element.textContent
    element.textContent = ""
    let i = 0

    const type = () => {
        if (i < text.length) {
            element.textContent += text[i++]
            setTimeout(type, 50)
        }
    }

    type()
})
