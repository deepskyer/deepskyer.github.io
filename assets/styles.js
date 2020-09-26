window.addEventListener("load", function (event) {
  var search = document.getElementsByClassName("search");
  var searchstyle = search[0];
  //float-right search btn-group
  if (searchstyle != null)
    searchstyle.classList.remove("float-right", "btn-group");
  var control = document.getElementsByClassName("form-control");
  var control = control[0];
  control.classList.add("d-search");

  var selects = document.getElementsByClassName("custom-select");
  for (let index = 0; index < selects.length; index++) {
    const element = selects[index];
    element.classList.add("d-select");
  }
});
