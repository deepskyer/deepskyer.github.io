var $table = $("#table");

function operateFormatter(value, row, index) {
  return [
    '<a class="edit" href="javascript:void(0)" title="edit">',
    '<i class="operation-icon fas fa-cog"></i>',
    "</a>  ",
    '<a class="delete" href="javascript:void(0)" title="delete">',
    '<i class="operation-icon-danger fas fa-times"></i>',
    "</a>  ",
  ].join("");
}

window.operateEvents = {
  "click .edit": function (e, value, row, index) {
    window.location = "/filter.html?id=" + row._id;
  },
  "click .delete": function (e, value, row, index) {
    $table.bootstrapTable("remove", {
      field: "_id",
      values: [row._id],
    });
    fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/" + row._id, {
      method: "DELETE",
    });
  },
};
