// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  currentHour = dayjs().hour();
  console.log(currentHour);
  
  for (var i = 9; i < 18; i++) {
    if (currentHour > i) {
      $("."+i).addClass("past").removeClass("future present");
    }
    else if (currentHour === i) {
      $("."+i).addClass("present").removeClass("past future");
    }
    else if (currentHour < i) {
      $("."+i).addClass("future").removeClass("past present");
    }  
  }


  // if (currentHour > 9) {
  //   $(".9").addClass("past").removeClass("future present");
  // }
  // else if (currentHour === 9) {
  //   $(".9").addClass("present").removeClass("past future");
  // }
  // else if (currentHour < 9) {
  //   $(".9").addClass("future").removeClass("past present");
  // }
  
  // if (currentHour > 10) {
  //   $(".10").addClass("past").removeClass("future present");
  // }
  // else if (currentHour === 10) {
  //   $(".10").addClass("present").removeClass("past future");
  // }
  // else if (currentHour < 10) {
  //   $(".10").addClass("future").removeClass("past present");
  // }
  
  // if (currentHour > 11) {
  //   $(".11").addClass("past").removeClass("future present");
  // }
  // else if (currentHour === 11) {
  //   $(".11").addClass("present").removeClass("past future");
  // }
  // else if (currentHour < 11) {
  //   $(".11").addClass("future").removeClass("past present");
  // }

  // if (currentHour > 16) {
  //   $(".16").addClass("past").removeClass("future present");
  // }
  // else if (currentHour === 16) {
  //   $(".16").addClass("present").removeClass("past future");
  // }
  // else if (currentHour < 16) {
  //   $(".16").addClass("future").removeClass("past present");
  // }
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // DONE: Add code to display the current date in the header of the page.
  // Desired format: Monday, December 13th
  var now = dayjs();
  $('#currentDay').text(now.format("dddd, MMMM D"));
});
