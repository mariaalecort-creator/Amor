function crearHoja() {
  const hoja = document.createElement("div");
  hoja.classList.add("hoja");

  // Emoji de hoja (puedes cambiarlo: 🍂 🍁 🍃)
  hoja.innerHTML = "🍂";

  // Posición horizontal aleatoria
  hoja.style.left = Math.random() * window.innerWidth + "px";

  // Tamaño aleatorio
  hoja.style.fontSize = (20 + Math.random() * 20) + "px";

  // Velocidad aleatoria
  hoja.style.animationDuration = (4 + Math.random() * 4) + "s";

  // Añadir hoja al contenedor
  document.getElementById("hojas-container").appendChild(hoja);

  // Eliminar hoja después de caer
  setTimeout(() => {
    hoja.remove();
  }, 8000);
}

// Crear una hoja nueva cada 500 ms
setInterval(crearHoja, 500);