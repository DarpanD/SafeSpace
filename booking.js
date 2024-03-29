// Function to show the date and time picker
function showDateTimePicker() {
  console.log("booton clinekd");
  // Show the datetime-local input
  var datetimeInput = document.getElementById("datetimeInput");
  console.log(datetimeInput);
  datetimeInput.style.display = "block";

  // Hide the placeholder text
  var placeholderText = document.getElementById("placeholderTextDateTime");
  console.log(placeholderText);
  placeholderText.style.display = "none";
}

function showTimePicker() {
  var timeInput = document.getElementById("timeInput");
  timeInput.style.display = "block";

  var placeholderText = document.getElementById("placeholderTextTime");
  placeholderText.style.display = "none";
}
