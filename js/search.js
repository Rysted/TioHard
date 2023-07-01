// Obtener referencias a los elementos del formulario, entrada de búsqueda y botón de limpiar.
const [FORM, INPUT, CLEAR] = [
  document.getElementById("form_search"),
  document.getElementById("search_input"),
  document.getElementById("search_clear"),
];

// Escucha al "FORM" cuando se envía.
FORM.addEventListener("submit", (e) => {
  e.preventDefault(); // Previene el envío del formulario por defecto.
  if (INPUT?.value.length > 0) {
    FORM.submit(); // Envia el formulario si el valor del "INPUT" tiene una longitud mayor a cero.
  }
});

// Escucha al "INPUT" cuando se cambia el valor.
INPUT.addEventListener("input", () => {
  INPUT?.value.length > 0
    ? clear_style("1", "pointer") // Aplica estilos al botón "CLEAR", cuando el "INPUT" tiene una longitud mayor a cero.
    : clear_style("0", "default"); // Aplica estilos al botón "CLEAR", cuando el "INPUT" está vacío.
});

// Escucha al botón "CLEAR" cuando se hace clic.
CLEAR.addEventListener("click", () => {
  INPUT.value = ""; // Limpia el valor del "INPUT".
  clear_style("0", "default"); // Aplica estilos al botón "CLEAR".
});

// Función para aplicar estilos al botón "CLEAR".
function clear_style(opacity, cursor) {
  CLEAR.style.opacity = opacity; // Establecer la opacidad del botón
  CLEAR.style.cursor = cursor; // Establecer el cursor del botón
}
