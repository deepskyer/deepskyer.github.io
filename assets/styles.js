window.addEventListener("load", function (event) {
  var selects = document.getElementsByClassName("custom-select");
  for (let index = 0; index < selects.length; index++) {
    const element = selects[index];
    element.classList.add("d-select");
  }
});
