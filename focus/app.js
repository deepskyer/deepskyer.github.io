const overlay = document.getElementById("overlay");
const focusCk = document.getElementById("focus");
const dbObject = firebase.database().ref().child("focus");

focusCk.style.display = "none";
dbObject.on("value", (snap) => {
  focusCk.checked = snap.val().mode;
  overlay.style.display = "none";
  focusCk.style.display = "";
});

focusCk.addEventListener("click", (e) => {
  var focusMode = false;
  dbObject.once("value", (snap) => {
    focusMode = snap.val().mode;
    dbObject.update({ mode: !focusMode });
    console.log("current mode: " + !focusMode);
  });
});
