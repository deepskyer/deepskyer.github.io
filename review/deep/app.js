const dbObject = firebase.database().ref().child("records");

dbObject.on("value", (snap) => {
  var api = snap.val();
  var badge = document.getElementById("badge");
  var count = 0;
  var outputData = [];
  var today = new Date();

  for (var key in api) {
    if (api.hasOwnProperty(key)) {
      var reviewDates = api[key]["reviewDates"];
      for (var date in reviewDates) {
        var reviewDate = new Date(date);
        if (today.setHours(0, 0, 0, 0) == reviewDate.setHours(0, 0, 0, 0)) {
          if (api[key]["reviewDates"][date] != true) {
            count = count + 1;
          }
        }
      }
    }
  }

  badge.innerText = count;

  function findDayValue(createdDate, reviewDates, days) {
    for (var date in reviewDates) {
      if (reviewDates.hasOwnProperty(date)) {
        //   console.log(date);
        var date1 = new Date(createdDate);
        var date2 = new Date(date);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        if (days == Math.round(Difference_In_Days)) {
          return reviewDates[date] == true
            ? "<i class='fas fa-check' style='color:#449d44;  padding-left: 15px'></i>"
            : date2.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)
            ? "<i class='fas fa-times' style='color:#d9534f; padding-left: 16px'></i>"
            : "";
        }
      }
    }
  }

  function toURL(name) {
    return (
      "<a href='https://www.leetcode.com/problems/" +
      name +
      "/'>" +
      name
        .split("-")
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ") +
      "</a>"
    );
  }

  var index = 1;

  for (var key in api) {
    if (api.hasOwnProperty(key)) {
      output = {
        id: index,
        name: toURL(key),
        createdAt: api[key].createdAt.substring(0, 10),
        day1: findDayValue(api[key].createdAt, api[key].reviewDates, 1),
        day3: findDayValue(api[key].createdAt, api[key].reviewDates, 3),
        day7: findDayValue(api[key].createdAt, api[key].reviewDates, 7),
        day15: findDayValue(api[key].createdAt, api[key].reviewDates, 15),
        day30: findDayValue(api[key].createdAt, api[key].reviewDates, 30),
      };
      index += 1;
      outputData.push(output);
    }
  }

  var $table = $("#table");

  $(function () {
    var data = outputData;
    $table.bootstrapTable({
      data: data,
      loadingFontSize: "12px",
      iconSize: "sm",
    });
  });

  window.operateEvents = {
    "click .delete": function (e, value, row, index) {
      $table.bootstrapTable("remove", {
        field: "name",
        values: [row.name],
      });
      var aim = row.name.split("/")[4];
      reset(aim);
    },
  };
});

function operateFormatter(value, row, index) {
  return [
    '<a class="delete" href="javascript:void(0)" title="delete">',
    '<i class="operation-icon-danger fas fa-redo"></i>',
    "</a>  ",
  ].join("");
}

function reset(problem) {
  const dbProblem = firebase.database().ref("records/" + problem);
  var today = new Date();
  dbProblem.update({
    createdAt: today,
    updatedAt: today,
    reviewDates: getReviewDates(today),
  });
}

function getReviewDates(beginDate) {
  let dateMap = new Map();
  var reviewDays = [1, 3, 7, 15, 30];
  reviewDays.forEach((day) => {
    var someDate = new Date();
    someDate.setDate(beginDate.getDate() + day);
    dateMap[someDate] = false;
  });

  return dateMap;
}
