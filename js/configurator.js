// El código utiliza la asignación de desestructuración para obtener referencias a los elementos del DOM.
const [THEME_SELECT, HTML_ELEMENT, GET_STORAGE] = [
  document.getElementById("theme"),
  document.documentElement,
  localStorage.getItem("theme"),
];

// El código crea una matriz de funciones flechas y las asigna a las constantes para establecer y eliminar el tema en el almacenamiento local y en el HTML.
const [SET_STORAGE, REM_STORAGE, SET_THEME, REM_THEME] = [
  (theme) => localStorage.setItem("theme", theme),
  () => localStorage.removeItem("theme"),
  (theme) => HTML_ELEMENT.setAttribute("data-theme", theme),
  () => HTML_ELEMENT.removeAttribute("data-theme"),
];

// Establece el tema almacenado previamente, si existe.
if (GET_STORAGE) {
  SET_THEME(GET_STORAGE);
}

// Escucha el tema seleccionado en la etiqueta "select".
THEME_SELECT.addEventListener("change", () => {
  // Realiza acciones basadas en el valor de la etiqueta "select".
  switch (THEME_SELECT.value) {
    case "dark":
      // Si es "dark", lo almacena en el almacenamiento local y agrega en el HTML.
      SET_STORAGE("dark");
      SET_THEME("dark");
      break;
    default:
      // Elimina el elemento almacenado en el almacenamiento local y en el HTML.
      REM_STORAGE();
      REM_THEME();
      break;
  }
});
