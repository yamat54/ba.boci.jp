$(function () {
  $.ajax({
    type: "GET",
    url: "/location.json",
    dataType: "json",
  }).done(function (data, textStatus, jqXHR) {
    $.each(data, function (index, row) {
      if (row.status === "open") {
        $(".btn-location." + row.name).addClass("open");
      }
      if (/^shibuya/.test(row.name) && row.status === "open") {
        $(".btn-location.shibuya").addClass("open");
      }
    });
  });
});
