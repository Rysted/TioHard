const [OPEN, MENU, CLOSE] = [
  document.getElementById("open_menu"),
  document.getElementById("nav_menu"),
  document.getElementById("close_menu"),
];

OPEN.addEventListener("click", () => {
  MENU.style.display = "block";
});

CLOSE.addEventListener("click", () => {
  MENU.style.display = "none";
});
