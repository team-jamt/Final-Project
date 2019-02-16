$.getJSON("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#wishList").append(
      "<p data-id='" + data[i]._id + "'>" + "<br />" + data[i].link + "</p>"
    );
  }
});

$(document).on("click", "#saveWish", () => {
  let thisId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/rentals/" + thisId,
    data: {
      title: $("#titleinput").val(),
      body: $("bodyinput").val()
    }
  }).then(function(data) {
    console.log(data);
    $("#notes").empty();
  });
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

export default Notesjs;
