var nextYear = "Jan 1, " + (new Date().getFullYear() + 1) + " 0:0:0";
// Set the date we're counting down to
var countDownDate = new Date(nextYear).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("leftThisYear").innerHTML = days + "<span class='left-this-year-small'>d</span> "
    + ("0" + hours).slice(-2) + "<span class='left-this-year-small'>h</span> "
    + ("0" + minutes).slice(-2) + "<span class='left-this-year-small'>m</span> "
    + ("0" + seconds).slice(-2) + "<span class='left-this-year-small'>s</span>";
  
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("leftThisYear").innerHTML = "EXPIRED";
  }
}, 1000);