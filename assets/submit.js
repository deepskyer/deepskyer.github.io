var word = document.getElementById("filter-word");
var time = document.getElementById("timelimit");
var type = document.getElementById("status");
document
  .querySelector("form.needs-validation")
  .addEventListener("submit", async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    console.log(word.value);

    var content =
      type.options[type.selectedIndex].value == "Block"
        ? "0"
        : time.options[time.selectedIndex].value;
    console.log(content);

    fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/", {
      method: "POST",
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
    alert("Submitted");
  });
