var saveButton = $(".saveBtn");

$(document).ready(function () {
  const inputArray = $("textarea");

  if (localStorage.notes) {
    const localStorageArray = JSON.parse(localStorage.notes);

    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i].value = localStorageArray[i];
    }
  }

  saveButton.on("click", function () {
    // need to find what the actual class is in our html that is associated with the input blocks
    const inputValues = [];

    for (let i = 0; i < inputArray.length; i++) {
      inputValues.push(inputArray[i].value);
    }
    localStorage.setItem("notes", JSON.stringify(inputValues));
  });

  function timeUpdate() {
    var myTime = moment().hour();

    // loop through the blocks and compare
    // there is a clue in the css file
  }

  timeUpdate();

  setInterval(timeUpdate, 15000);

  // do this for every unique block

  console.log(inputArray);

  $("#currentDay").text(moment().format("DD/MM/YYYY"));
});

var noteFormEl = $("#note-form");
var noteDisplayEl = $("#note-display");

// Gets project data from local storage and displays it
function printNoteData() {
  // clear current projects on the page
  noteDisplayEl.empty();

  // get projects from localStorage
  var notes = readNotesFromStorage();
}

// var notes = readNotesFromStorage();
// notes.push(newNote);
// saveNotesToStorage(notes);
