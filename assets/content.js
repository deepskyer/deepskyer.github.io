var timelimit;
var timeout = 0;
var id;
var url = window.location.href;
var allowcount = 0;
var blockcount = 0;
var newblock = 0;

fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/")
  .then((res) => res.json())
  .then((result) => {
    for (let index = 0; index < result.length; index++) {
      const website = result[index];
      if (website.rating == 2) {
        allowcount = allowcount + 1;
      } else {
        newblock = newblock + 1;
      }
    }
    document.getElementById("allowcount").innerHTML = allowcount;
    document.getElementById("blockcount").innerHTML = newblock;
    document.getElementById("pill").innerHTML = allowcount + newblock;
  })
  .catch((err) => console.error(err));
