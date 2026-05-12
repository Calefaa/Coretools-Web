document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const currentPath = window.location.pathname
        .replace(/\/$/, "");

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        const linkPath = new URL(link.href).pathname
            .replace(/\/$/, "");

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });

    /* =========================
       DROPDOWN MENU
    ========================= */

    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");

    if (dropdown && dropdownBtn) {

        dropdownBtn.addEventListener("click", (event) => {

            event.stopPropagation();

            dropdown.classList.toggle("open");
        });

        document.addEventListener("click", () => {
            dropdown.classList.remove("open");
        });
    }

    /* =========================
       SEARCH BAR
    ========================= */

    const searchInput = document.querySelector(".search-box input");
    const toolCards = document.querySelectorAll(".tool-card");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query = searchInput.value
                .toLowerCase()
                .trim();

            toolCards.forEach(card => {

                const title = card.querySelector(".tool-title")
                    .textContent
                    .toLowerCase();

                const category = card.querySelector(".tool-category")
                    .textContent
                    .toLowerCase();

                const description = card.querySelector(".tool-description")
                    .textContent
                    .toLowerCase();

                const matches =
                    title.includes(query) ||
                    category.includes(query) ||
                    description.includes(query);

                card.style.display =
                    matches ? "block" : "none";
            });
        });
    }

    /* =========================
       TOOL CARD HOVER EFFECT
    ========================= */

    toolCards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });

});

const search = document.getElementById("search");

// Cuando selecciona el buscador
search.addEventListener("focus", () => {
  search.placeholder = "esta cosa ni funciona XdxdXDx:vvvvv";
});

// Cuando sale del buscador
search.addEventListener("blur", () => {
  search.placeholder = "Buscar...";
});