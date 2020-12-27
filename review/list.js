const dbObject = firebase.database().ref().child("records");
function removeAllChildNodes(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
}
function getDiffDays(e, t) {
  var a = new Date(t),
    r = (new Date(e).getTime() - a.getTime()) / 864e5;
  return Math.round(r);
}
function confirm(e, t) {
  document.getElementById(e).classList.add("fa", "fa-check", "check"),
    (document.getElementById(t).hidden = !0),
    firebase
      .database()
      .ref("records/" + e)
      .on("value", (t) => {
        var a = new Date(),
          r = t.val().reviewDates;
        for (var d in r) {
          var n = new Date(d);
          a.setHours(0, 0, 0, 0) == n.setHours(0, 0, 0, 0) &&
            firebase
              .database()
              .ref("records/" + e + "/reviewDates")
              .set({ [d]: !0 });
        }
      });
}
dbObject.on("value", (e) => {
  var t = document.getElementById("list"),
    a = document.getElementById("badge");
  removeAllChildNodes(t);
  var r = new Date(),
    d = e.val(),
    n = 0;
  for (var i in d)
    if (d.hasOwnProperty(i)) {
      var s = d[i].reviewDates;
      for (var c in s) {
        var o = new Date(c);
        if (r.setHours(0, 0, 0, 0) == o.setHours(0, 0, 0, 0)) {
          var l = document.createElement("li"),
            m = document.createElement("span");
          m.className = "fa-li";
          var f = document.createElement("i");
          m.appendChild(f),
            (f.id = i),
            1 == d[i].reviewDates[c]
              ? f.classList.add("fa", "fa-check", "check")
              : (n += 1);
          var u = document.createElement("a"),
            v = document.createTextNode(
              i
                .split("-")
                .map((e) => e[0].toUpperCase() + e.substring(1))
                .join(" ")
            );
          u.appendChild(v),
            (u.title = i),
            (u.href = "https://leetcode.com/problems/" + i);
          var p = document.createElement("span");
          p.className = "days days-" + getDiffDays(c, d[i].createdAt);
          var h = document.createTextNode(
            "Day " + getDiffDays(c, d[i].createdAt)
          );
          p.appendChild(h);
          var D = document.createElement("input");
          (D.className = "confirm"),
            (D.id = i + "-done"),
            (D.type = "button"),
            (D.value = "Done"),
            D.setAttribute(
              "onclick",
              "confirm('" + i + "', '" + i + "-done');"
            ),
            1 == d[i].reviewDates[c] && D.setAttribute("hidden", !0),
            l.appendChild(m),
            l.appendChild(u),
            l.appendChild(p),
            l.appendChild(D),
            list.appendChild(l);
        }
      }
    }
  a.innerText = n;
});
