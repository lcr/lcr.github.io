$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("search-open");
    $("body").css("overflow-y", "hidden");
    if(innerWidth > 650){
      $("#search-input").focus();
    }
  });
 
  $("#search, button.search-close").on("click keyup", function (event) {
    if (
      event.target.className === "search-close" || event.keyCode === 27
    ) {
      $(this).removeClass("search-open");
      $("body").css("overflow-y", "visible");
    }
  });
});