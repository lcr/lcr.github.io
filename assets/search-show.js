$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("search-open");
    $("#search-input").focus();
    $("body").css("overflow-y", "hidden");
  });
  
  $("#search, button.search-close").on("click keyup", function (event) {
    if (
      event.target === this || event.target.className === "search-close" || event.keyCode === 27
    ) {
      $(this).removeClass("search-open");
      $("body").css("overflow-y", "visible");
    }
  });
  
  $("form").submit(function (event) {
    event.preventDefault();
    return false;
  });
});