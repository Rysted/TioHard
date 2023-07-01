/* El código utiliza la asignación de desestructuración, para obtener referencias a los elementos del DOM. */
const [THEME_SELECT, HTML_ELEMENT, GET_STORAGE] = [
  document.getElementById("theme"),
  document.documentElement,
  localStorage.getItem("theme"),
];

/* El código crea una matriz de funciones flechas y las asigna a las constantes, para establecer y eliminar el tema en el almacenamiento local y en el HTML */
const [SET_STORAGE, REM_STORAGE, SET_THEME, REM_THEME] = [
  (theme) => localStorage.setItem("theme", theme),
  () => localStorage.removeItem("theme"),
  (theme) => HTML_ELEMENT.setAttribute("data-theme", theme),
  () => HTML_ELEMENT.removeAttribute("data-theme"),
];

// Establecer el tema almacenado previamente, si existe
/* El código verifica si hay un valor almacenado en la variable `GET_STORAGE` (que representa el tema almacenado en el almacenamiento local). Si hay un valor, llama a la función `SET_THEME` y pasa el tema almacenado como argumento. 
Esto se hace para establecer el tema en el elemento HTML cuando se carga la página, de modo que se muestre el tema correcto en función del valor almacenado. */
if (GET_STORAGE) {
  SET_THEME(GET_STORAGE);
}

// Manejar el evento "change" del selector de tema
/* El código agrega un detector de eventos al elemento `THEME_SELECT`, que representa un selector para elegir un tema.
El evento que se escucha es el evento de "cambio", que se activa cuando el usuario selecciona una opción diferente en el selector de temas. */
THEME_SELECT.addEventListener("change", () => {
  switch (THEME_SELECT.value) {
    case "dark":
      SET_STORAGE("dark");
      SET_THEME("dark");
      break;
    default:
      REM_STORAGE();
      REM_THEME();
      break;
  }
});
