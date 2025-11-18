const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", () => {
    const texto = item.getAttribute("data-text");
    const info = item.querySelector(".info");

    // Alternar entre mostrar y ocultar el texto
    info.textContent = info.textContent ? "" : texto;
  });
});