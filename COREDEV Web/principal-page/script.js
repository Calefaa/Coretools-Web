const menuButton = document.querySelector(".menu-btn");
const closeButton = document.querySelector(".close-sidebar");

const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");

/* =========================
   OPEN SIDEBAR
========================= */

menuButton.addEventListener("click", () => {

    sidebar.classList.add("active");
    overlay.classList.add("active");

});

/* =========================
   CLOSE SIDEBAR
========================= */

closeButton.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar() {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}