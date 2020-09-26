var filterword;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log("id is " + id);

fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/" + id)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    document.getElementById("filter-word").value = result.title;
    document.getElementById("status").value = "";
    document.getElementById("timelimit").value = "";
  })
  .catch((err) => console.error(err));

var word = document.getElementById("filter-word");
var time = document.getElementById("timelimit");
var type = document.getElementById("status");
document
  .querySelector("form.update")
  .addEventListener("submit", async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    var content =
      type.options[type.selectedIndex].value == "Block"
        ? "0"
        : time.options[time.selectedIndex].value;

    fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: word.value,
        content: content == "Choose" ? 0 : content,
        rating: type.options[type.selectedIndex].value == "Allow" ? 2 : 3,
      }),
    });
    alert(word.value + "的设置已经更新");
  });
