const updateYear = () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  updateYear();
});
