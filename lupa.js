const imagen = document.getElementById("imagen");
const lupa = document.getElementById("lupa");

const zoom = 2; // Nivel de zoom

imagen.addEventListener("mousemove", function (e) {
  const rect = imagen.getBoundingClientRect();

  // Posición del cursor dentro de la imagen
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Mostrar lupa
  lupa.style.display = "block";
  lupa.style.left = (x - lupa.offsetWidth / 2) + "px";
  lupa.style.top = (y - lupa.offsetHeight / 2) + "px";

  // Aplicar zoom en el área
  lupa.style.backgroundImage = `url(${imagen.src})`;
  lupa.style.backgroundSize = `${imagen.width * zoom}px ${imagen.height * zoom}px`;
  lupa.style.backgroundPosition = `-${x * zoom - lupa.offsetWidth / 2}px -${y * zoom - lupa.offsetHeight / 2}px`;
});

// Cuando el mouse sale de la imagen, ocultar la lupa
imagen.addEventListener("mouseleave", function () {
  lupa.style.display = "none";
});