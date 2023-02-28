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
  $("#currentDay").text(moment().format("DD/MM/YYYY"));
});

// Moment.JS Time and Date

// const moment = require("moment");

// let now = moment();
// console.log(now.format());

// Save and Cancel Button

// var saveBtn = document.getElementById(".saveButton");
// var cancelBtn = document.getElementById(".cancelButton");

// saveBtn.addEventListener("click", save);
// cancelBtn.addEventListener("cclick", cancel);

// function save() {}

// function cancel() {}

// // drag and drop option
// const tg_activity = document.querySelectorAll(".activity");
// const all_activity = document.querySelectorAll(".activity");
// let draggableactivity = null;

//   activity.forEach((activity) => {
//   activity.addEventListener("dragstart", dragStart);
//   activity.addEventListener("dragend", dragEnd);
// });

// activity.forEach((activity) => {
//   activity.addEventListener("dragover", dragOver);
//   activity.addEventListener("dragenter", dragEnter);
//   activity.addEventListener("dragleave", dragLeave);
//   activity.addEventListener("drop", dragDrop);
// });

// function dragStart() {
//   draggableactivity = this;
//   console.log("dragStart");
// }
// function dragEnd() {
//   draggableactivity = null;
//   console.log("dragEnd");
// }
// function dragOver(e) {
//   e.preventDefault();
// }
// function dragEnter() {
//   console.log("dragEnter");
// }
// function dragLeave() {
//   console.log("dragLeave");
// }
// function dragDrop() {
//   this.appendChild(draggableactivity);
//   console.log("dropped");
// }

// editable content

// $(function () {
//   var $td = $("td");

//   $td.on({
//     keypress: function (e) {
//       if (e.which !== 13) {
//         // On Return Key - "save" cell
//         e.preventDefault();
//         $(this).prop("contenteditable", false);
//       }
//     },
//     dblclick: function () {
//       $td.not(this).prop("contenteditable", false);
//       $(this).prop("contenteditable", true);
//     },
//   });
// });

// Time and Date using Moment JS
// const year = d2.getFullYear(); // 2022
// const month = d2.getMonth(); // 10
// const dayOfMonth = d2.getDate(); // 31
// const hours = d2.getHours(); // 19
// const minutes = d2.getMinutes(); // 10
// const seconds = d2.getSeconds(); // 0
// const millis = d2.getMilliseconds(); // 0
// const d1 = new Date(2017, 0, 4); // Mon Oct 31 2022 00:00:00 GMT+0100
// const d2 = new Date(2017, 11, 7, 13, 5, 10, 0); // Mon Oct 31 2022 13:05:10 GMT+0100
// const nextYear = new Date(2017, 0, 4);
// nextYear.setFullYear(2023); // Tue Oct 31 2023 00:00:00 GMT+0100 (W. Europe Standard Time)
// const a1 = new Date(2017, 0, 1);
// const a2 = new Date(2018, 0, 1);
// const diffInMillis = a2.getTime() - a1.getTime();
// const diffInDays = diffInMillis / (1000 * 60 * 60 * 24); // 365

// moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log("moment");

// const moment = require("moment");
// const d = new Date("2022/10/31");

// moment(d).format("MMMM d, YYYY"); // June 1, 2019
// m.format("[The] Do [of] MMMM");
// moment.locale(); // 'en'

// const m = moment(new Date("2022/10/31 19:29:00"));

// m.format("L"); // 06/01/2019
// m.format("LL"); // 'June 1, 2019'

// // Set the EN
// moment.locale("en");

// m = moment(new Date("2019/06/01"));
// m.format("L"); // '31.10.2022'
// m.format("LL"); // '31. Oct 2022'onst moment = require('moment');
// m.format("h:mma"); // '19:29pm'
