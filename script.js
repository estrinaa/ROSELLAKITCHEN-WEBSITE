// FILTER MENU
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

let activeFilter = "semua";

function filterMenu() {
    const keyword = document
        .getElementById("searchInput")
        .value.toLowerCase();

    menuCards.forEach(card => {
        const category = card.dataset.category;
        const name = card.dataset.name;

        const categoryMatch =
            activeFilter === "semua" ||
            category === activeFilter;

        const searchMatch = name.includes(keyword);

        card.style.display =
            categoryMatch && searchMatch
            ? "block"
            : "none";
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        activeFilter = this.dataset.filter;

        filterMenu();
    });
});

// SEARCH MENU
document
    .getElementById("searchInput")
    .addEventListener("input", filterMenu);


// DARK MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }

});


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Semua kolom harus diisi!";

        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent =
            "Format email tidak valid!";

        return;
    }

    formMessage.textContent =
        "Terima kasih " + name +
        "! Pesan berhasil divalidasi.";

    contactForm.reset();

});


// FOOTER YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();