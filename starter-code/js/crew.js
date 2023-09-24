$(document).ready(function () {
  const btnCommander = $("#js-crew-commander");
  const btnEngineer = $("#js-crew-engineer");
  const btnPilot = $("#js-crew-pilot");
  const btnSpecialist = $("#js-crew-specialist");

  btnCommander.addClass("crew__active");

  // click btn commander

  btnCommander.on("click", function () {
    btnCommander.addClass("crew__active");
    $(".crew__lefttitle").text("Commander");
    $(".crew__leftname").text("Douglas Hurley");
    $(".crew__leftdesc").text(
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    );
    $(".crew__rightimg").attr("src", "assets/crew/image-douglas-hurley.webp");

    btnEngineer.removeClass("crew__active");
    btnPilot.removeClass("crew__active");
    btnSpecialist.removeClass("crew__active");
  });

  // click btn Engineer

  btnEngineer.on("click", function () {
    btnEngineer.addClass("crew__active");
    $(".crew__lefttitle").text("Flight Engineer");
    $(".crew__leftname").text("Anousheh Ansari");
    $(".crew__leftdesc").text(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.  Ansari was the fourth self-funded space tourist, the first self-funded woman to  fly to the ISS, and the first Iranian in space."
    );
    $(".crew__rightimg").attr("src", "assets/crew/image-anousheh-ansari.webp");

    btnCommander.removeClass("crew__active");
    btnPilot.removeClass("crew__active");
    btnSpecialist.removeClass("crew__active");
  });

  //click btn pilot

  btnPilot.on("click", function () {
    btnPilot.addClass("crew__active");
    $(".crew__lefttitle").text("Pilot");
    $(".crew__leftname").text("Victor Glover");
    $(".crew__leftdesc").text(
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the  International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    );
    $(".crew__rightimg").attr("src", "assets/crew/image-victor-glover.webp");

    btnCommander.removeClass("crew__active");
    btnEngineer.removeClass("crew__active");
    btnSpecialist.removeClass("crew__active");
  });

  //click btn specialist

  btnSpecialist.on("click", function () {
    btnSpecialist.addClass("crew__active");
    $(".crew__lefttitle").text("Mission Specialist");
    $(".crew__leftname").text("Mark Shuttleworth");
    $(".crew__leftdesc").text(
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind   the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist"
    );
    $(".crew__rightimg").attr(
      "src",
      "assets/crew/image-mark-shuttleworth.webp"
    );

    btnCommander.removeClass("crew__active");
    btnEngineer.removeClass("crew__active");
    btnPilot.removeClass("crew__active");
  });
});
