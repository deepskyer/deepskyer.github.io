var code = "test";
var password = document.getElementById("password");
document
  .querySelector("form.needs-validation")
  .addEventListener("submit", async function (e) {
    //prevent the normal submission of the form
    e.preventDefault();
    if (password.value == code) {
      window.location.replace("./dashboard.html");
    } else {
      alert("密码错误！");
    }
  });
