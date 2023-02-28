$(document).ready(function () {
  $(".saveButton").on("click", function () {
    // need to find what the actual class is in our html that is associated with the input blocks
    var text = $(this).sibling(".insideofinput").val();
    var clock = $(this).parent().attr("id");

    localStorage.setItem(clock, text);
  });

  function timeUpdate() {
    var myTime = moment().hour();

    // loop through the blocks and compare
    // there is a clue in the css file
  }

  timeUpdate();

  setInterval(timeUpdate, 15000);

  // do this for every unique block
  $("#blockId1 .insideofInput").val(localStorage.getItem("blockId1"));
  $("#blockId2 .insideofInput").val(localStorage.getItem("blockId2"));
  $("#blockId3 .insideofInput").val(localStorage.getItem("blockId3"));
  $("#blockId4 .insideofInput").val(localStorage.getItem("blockId4"));
  $("#blockId5 .insideofInput").val(localStorage.getItem("blockId5"));
  $("#blockId6 .insideofInput").val(localStorage.getItem("blockId6"));
  $("#blockId7 .insideofInput").val(localStorage.getItem("blockId7"));
  $("#blockId8 .insideofInput").val(localStorage.getItem("blockId8"));
  $("#blockId9 .insideofInput").val(localStorage.getItem("blockId9"));
  $("#blockId10 .insideofInput").val(localStorage.getItem("blockId10"));
  $("#blockId11 .insideofInput").val(localStorage.getItem("blockId11"));
  $("#blockId12 .insideofInput").val(localStorage.getItem("blockId12"));
  $("#blockId13 .insideofInput").val(localStorage.getItem("blockId13"));
  $("#blockId14 .insideofInput").val(localStorage.getItem("blockId14"));
  $("#blockId15 .insideofInput").val(localStorage.getItem("blockId15"));
  $("#blockId16 .insideofInput").val(localStorage.getItem("blockId16"));
  $("#blockId17 .insideofInput").val(localStorage.getItem("blockId17"));
  $("#blockId18 .insideofInput").val(localStorage.getItem("blockId18"));
  $("#blockId19 .insideofInput").val(localStorage.getItem("blockId19"));
  $("#blockId20 .insideofInput").val(localStorage.getItem("blockId20"));
  $("#currentDay").text(moment().format("DD/MM/YYYY"));
});
