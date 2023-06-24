const icon = document.getElementById("sunMoonIcon")

function toggleDarkMode() {
  const root = document.documentElement;
  root.classList.toggle("dark-mode");

  if (root.classList.contains("dark-mode")) {
    icon.classList = "bi bi-moon-fill";
  } else {
    icon.classList = "bi bi-sun";
  }
}
