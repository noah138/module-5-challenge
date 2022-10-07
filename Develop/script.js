$(document).ready(function () {
    showText();
    displayDate();
    colorChanger();
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
    $(".description").each(function () {
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
    var time = $(this).siblings(".hour").text();
    localStorage.setItem(time, description);

    colorChanger();
    showText();
})

// function to show the text input even after refresh
function showText() {
    
    var text8AM = localStorage.getItem("8 AM");
    $((".description")).text(text8AM);
    
    var text9AM = localStorage.getItem("9 AM");
    $("#9").text(text9AM);
    
    var text10AM = localStorage.getItem("10 AM");
    $("#10").text(text10AM);
    
    var text11AM = localStorage.getItem("11 AM");
    $("#11").text(text11AM);
    
    var text12PM = localStorage.getItem("12 PM");
    $("#12").val(text12PM);
    
    var text1PM = localStorage.getItem("1 PM");
    $("#13").val(text1PM);
    
    var text2PM = localStorage.getItem("2 PM");
    $("#14").val(text2PM);
    
    var text3PM = localStorage.getItem("3 PM");
    $("#15").val(text3PM);
    
    var text4PM = localStorage.getItem("4 PM");
    $("#16").val(text4PM);
    
    var text5PM = localStorage.getItem("5 PM");
    $("#17").val(text5PM);
}