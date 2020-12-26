const dbObject = firebase.database().ref().child("records");
dbObject.on("value", (snap) => {
  console.log(snap.val());
  var today = new Date();
  var list = document.getElementById("list");
  removeAllChildNodes(list);
  //   console.log(a);

  for (var key in snap.val()) {
    if (snap.val().hasOwnProperty(key)) {
      var reviewDates = snap.val()[key]["reviewDates"];
      //   console.log(reviewDates);
      for (var date in reviewDates) {
        var reviewDate = new Date(date);
        //console.log(key);
        if (
          today.setHours(0, 0, 0, 0) == reviewDate.setHours(0, 0, 0, 0) &&
          snap.val()[key]["reviewDates"][date] == false
        ) {
          console.log("let's review " + key);
          var item = document.createElement("li");
          var link = document.createElement("a");
          var linkText = document.createTextNode(key);
          link.appendChild(linkText);
          link.title = key;
          link.href = "https://leetcode.com/problems/" + key;
          item.appendChild(link);
          list.appendChild(item);
        } else {
          console.log("skip" + key);
        }
      }
    }
  }
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
