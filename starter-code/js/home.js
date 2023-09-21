$(document).ready(function () {
  //Navbar active

  if (window.location.href.indexOf("home") != -1) {
    $(".js-btn-nav-home").addClass("active");
  } else if (window.location.href.indexOf("destination") != -1) {
    $(".js-btn-nav-destination").addClass("active");
    $(".js-btn-nav-home").removeClass("active");
  } else if (window.location.href.indexOf("crew") != -1) {
    $(".js-btn-nav-crew").addClass("active");
    $(".js-btn-nav-home").removeClass("active");
  } else if (window.location.href.indexOf("technology") != -1) {
    $(".js-btn-nav-technology").addClass("active");
    $(".js-btn-nav-home").removeClass("active");
  }

  $("#js-btn-navbar-choose").on("click", function () {
    $(".container__headernavbarmobile").removeClass("d-none");
    $(".container__headernavbarmobile").addClass("d-flex");
  });

  $("#js-btn-close-navbarmobile").on("click", function () {
    $(".container__headernavbarmobile").addClass("d-none");
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 768) {
      $(".container__headernavbarmobile").addClass("d-none");
    }
  });
});
