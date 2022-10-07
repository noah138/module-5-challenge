// Displaying the current date
var dateDisplay = $('#currentDay');

displayDate();

function displayDate() {
    var now = moment().format("dddd, MMMM Do");
    dateDisplay.text(now)
}

