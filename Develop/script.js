$(document).ready(function () {
    displayDate();
    colorChanger();
    showText();
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

    // save button function
$(".saveBtn").on("click", function() {
    // retrieve the values of the bordering boxes then save text
    var description = $(this).siblings(".description").val();
    var time = $(this).siblings().attr("id");
    localStorage.setItem(time, description);
})

// function to render the text input to the right text boxes
function showText() {
    ($("#8").siblings(".description")).val(localStorage.getItem("8"));
    ($("#9").siblings(".description")).val(localStorage.getItem("8"));
    ($("#10").siblings(".description")).val(localStorage.getItem("8"));
    ($("#11").siblings(".description")).val(localStorage.getItem("8"));
    ($("#12").siblings(".description")).val(localStorage.getItem("8"));
    ($("#13").siblings(".description")).val(localStorage.getItem("8"));
    ($("#14").siblings(".description")).val(localStorage.getItem("8"));
    ($("#15").siblings(".description")).val(localStorage.getItem("8"));
    ($("#16").siblings(".description")).val(localStorage.getItem("8"));
    ($("#17").siblings(".description")).val(localStorage.getItem("8"));
}