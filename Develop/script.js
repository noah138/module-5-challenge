// Displaying the current date
var dateDisplay = $("#currentDay");

displayDate();

function displayDate() {
    var now = moment().format("dddd, MMMM Do");
    dateDisplay.text(now)
}

// How to get colors to change in relation to time:
// 1. make variable that saves current hour of the day
// 2. make a loop that goes through each row and checks hour variable against it own
// 3. if less than, equal to, or greater than add the correct css class

$(document).ready(function () {
    // save button function
    $(".saveBtn").on("click", function() {
        // retrieve the values of the bordering boxes then save text
        var description = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").val();
        localStorage.setItem(time, description);
    })
})