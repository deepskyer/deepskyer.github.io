window.addEventListener("load", function (event) {
  var searchs = document.getElementsByClassName("search");
  for (let index = 0; index < searchs.length; index++) {
    const element = searchs[index];
    element.classList.remove("float-right");
    element.classList.remove("btn-group");
    alert("remove float right");
  }

  //   var control = document.getElementsByClassName("form-control");
  //   var control = control[0];
  //   control.classList.add("d-search");

  var selects = document.getElementsByClassName("custom-select");
  for (let index = 0; index < selects.length; index++) {
    const element = selects[index];
    element.classList.add("d-select");
  }
});
