document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById('myPhoto');
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});
