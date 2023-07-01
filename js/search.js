const [FORM, INPUT, CLEAR] = [
  document.getElementById("form_search"),
  document.getElementById("search_input"),
  document.getElementById("search_clear"),
];

FORM.addEventListener("submit", (e) => {
  console.log(INPUT?.value.length);
  e.preventDefault();
  if (INPUT?.value.length > 0) {
    FORM.submit();
  }
});

INPUT.addEventListener("input", () => {
  INPUT?.value.length > 0
    ? clear_style("1", "pointer")
    : clear_style("0", "default");
});

CLEAR.addEventListener("click", () => {
  INPUT.value = "";
  clear_style("0", "default");
});

function clear_style(opacity, cursor) {
  CLEAR.style.opacity = opacity;
  CLEAR.style.cursor = cursor;
}
