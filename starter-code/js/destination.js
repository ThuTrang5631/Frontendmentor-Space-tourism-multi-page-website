$(document).ready(function () {
  // tabbar choose destination
  const btnMoon = $("#js-btn-moon");
  const btnMars = $("#js-btn-mars");
  const btnEurope = $("#js-btn-europa");
  const btnTitan = $("#js-btn-titan");

  btnMoon.children().addClass("active");

  //click btn moon tabbar

  btnMoon.on("click", function () {
    btnMoon.children().addClass("active");
    $(".destination__contentrighttitle").text("MOON");
    $(".destination__contentrightdesc").text(
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites"
    );
    $(".destination__km").text("225 MIL. KM");
    $(".destination__days").text("3 DAYS");
    $(".destination__contentleftimg").attr(
      "src",
      "assets/destination/image-moon.png"
    );
    btnMars.children().removeClass("active");
    btnEurope.children().removeClass("active");
    btnTitan.children().removeClass("active");
  });

  //click btn mars tabbar

  btnMars.on("click", function () {
    btnMars.children().addClass("active");
    $(".destination__contentrighttitle").text("MARS");
    $(".destination__contentrightdesc").text(
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
    $(".destination__km").text("225 MIL. KM");
    $(".destination__days").text("9 MONTHS");
    $(".destination__contentleftimg").attr(
      "src",
      "assets/destination/image-mars.png"
    );

    btnMoon.children().removeClass("active");
    btnEurope.children().removeClass("active");
    btnTitan.children().removeClass("active");
  });

  //click btn europa tabbar

  btnEurope.on("click", function () {
    btnEurope.children().addClass("active");
    $(".destination__contentrighttitle").text("EUROPA");
    $(".destination__contentrightdesc").text(
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
    $(".destination__km").text("628 MIL. KM");
    $(".destination__days").text("3 YEARS");
    $(".destination__contentleftimg").attr(
      "src",
      "assets/destination/image-europa.png"
    );

    btnMoon.children().removeClass("active");
    btnMars.children().removeClass("active");
    btnTitan.children().removeClass("active");
  });

  //click btn titan tabbar

  btnTitan.on("click", function () {
    btnTitan.children().addClass("active");
    $(".destination__contentrighttitle").text("TITAN");
    $(".destination__contentrightdesc").text(
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
    $(".destination__km").text("1.6 BIL. KM");
    $(".destination__days").text("7 YEARS");
    $(".destination__contentleftimg").attr(
      "src",
      "assets/destination/image-titan.png"
    );

    btnMoon.children().removeClass("active");
    btnMars.children().removeClass("active");
    btnEurope.children().removeClass("active");
  });
});
