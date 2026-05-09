const links = document.querySelectorAll("nav a");

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  const currentPath = window.location.pathname;

  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});