const dbObject = firebase.database().ref().child("records");

dbObject.on("value", (snap) => {
  var ul = document.getElementById("list");
  removeAllChildNodes(ul);
  var today = new Date();

  var data = snap.val();

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var reviewDates = data[key]["reviewDates"];
      for (var date in reviewDates) {
        var reviewDate = new Date(date);
        if (today.setHours(0, 0, 0, 0) == reviewDate.setHours(0, 0, 0, 0)) {
          var item = document.createElement("li");
          var faSpan = document.createElement("span");
          faSpan.className = "fa-li";
          var icon = document.createElement("i");
          faSpan.appendChild(icon);
          icon.id = key;
          if (data[key]["reviewDates"][date] == true) {
            icon.classList.add("fa", "fa-check", "check");
          }
          var link = document.createElement("a");
          var linkText = document.createTextNode(
            key
              .split("-")
              .map((word) => {
                return word[0].toUpperCase() + word.substring(1);
              })
              .join(" ")
          );
          link.appendChild(linkText);
          link.title = key;
          link.href = "https://leetcode.com/problems/" + key;

          var days = document.createElement("span");
          days.className =
            "days days-" + getDiffDays(date, data[key]["createdAt"]);
          var dayText = document.createTextNode(
            "Day " + getDiffDays(date, data[key]["createdAt"])
          );
          days.appendChild(dayText);

          var input = document.createElement("input");
          input.className = "confirm";
          input.id = key + "-done";
          input.type = "button";
          input.value = "Done";
          input.setAttribute(
            "onclick",
            "confirm('" + key + "', '" + key + "-done');"
          );
          if (data[key]["reviewDates"][date] == true) {
            input.setAttribute("hidden", true);
          }
          item.appendChild(faSpan);
          item.appendChild(link);
          item.appendChild(days);
          item.appendChild(input);
          list.appendChild(item);
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

function getDiffDays(now, startDate) {
  var date1 = new Date(startDate);
  var date2 = new Date(now);

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.round(Difference_In_Days);
}

function confirm(problemName, button) {
  document.getElementById(problemName).classList.add("fa", "fa-check", "check");
  document.getElementById(button).hidden = true;
  const dbProblem = firebase.database().ref("records/" + problemName);

  //update the review to true
  dbProblem.on("value", (snap) => {
    var today = new Date();
    var data = snap.val();

    var reviewDates = data["reviewDates"];

    for (var date in reviewDates) {
      var reviewDate = new Date(date);
      if (today.setHours(0, 0, 0, 0) == reviewDate.setHours(0, 0, 0, 0)) {
        firebase
          .database()
          .ref("records/" + problemName + "/reviewDates")
          .set({
            [date]: true,
          });
      }
    }
  });
}
