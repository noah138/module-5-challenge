$(document).ready(function () {
    colorChanger();
    displayDate();
})

// Displaying the current date
var dateDisplay = $("#currentDay");

function displayDate() {
    var now = moment().format("dddd, MMMM Do");
    dateDisplay.text(now);
}


function colorChanger() {
    // retrieve current number of hours
    var currentHour = moment().hour()
    // loop through each row
    $(".time-block").each(function () {
        var rowHour = parseInt($(this).attr("id"));
        console.log(rowHour)
        // to compare rowHour with currentHour and change color accordingly
        if (rowHour < currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (rowHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
// Not sure how to incorporate AM and PM elements into the color changes


    // save button function
    $(".saveBtn").on("click", function() {
        // retrieve the values of the bordering boxes then save text
        var description = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").val();
        localStorage.setItem(time, description);
    })