function witness() {
  $("#timelimit option").each(function () {
    if ($("#status option:selected").val() == "Allow")
      $("#timelimit").removeAttr("disabled");
  });
}
