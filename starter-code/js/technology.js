$(document).ready(function () {
  const btnFirst = $("#js-technology-1");
  const btnSecond = $("#js-technology-2");
  const btnThird = $("#js-technology-3");
  const imgEle = $(".technology__contentrightimg");

  if ($("body").width() < 1200) {
    imgEle.attr("src", "assets/technology/image-launch-vehicle-landscape.jpg");
  } else {
    imgEle.attr("src", "assets/technology/image-launch-vehicle-portrait.jpg");
  }

  // click first btn

  $(window).on("resize", function () {
    if ($(window).width() < 1200) {
      imgEle.attr(
        "src",
        "assets/technology/image-launch-vehicle-landscape.jpg"
      );
    } else {
      imgEle.attr("src", "assets/technology/image-launch-vehicle-portrait.jpg");
    }
  });

  btnFirst.on("click", function () {
    btnFirst.addClass("technology-active");

    $(".technology__contentlefttext").text("The terminology...");
    $(".technology__contentlefttitle").text("Launch vehicle");
    $(".technology__contentleftdesc").text(
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    );

    btnSecond.removeClass("technology-active");
    btnThird.removeClass("technology-active");

    if ($("body").width() < 1200) {
      imgEle.attr(
        "src",
        "assets/technology/image-launch-vehicle-landscape.jpg"
      );
    } else {
      imgEle.attr("src", "assets/technology/image-launch-vehicle-portrait.jpg");
    }

    $(window).on("resize", function () {
      if ($(window).width() < 1200) {
        imgEle.attr(
          "src",
          "assets/technology/image-launch-vehicle-landscape.jpg"
        );
      } else {
        imgEle.attr(
          "src",
          "assets/technology/image-launch-vehicle-portrait.jpg"
        );
      }
    });
  });

  // click second btn
  btnSecond.on("click", function () {
    btnSecond.addClass("technology-active");

    $(".technology__contentlefttext").text("The terminology...");
    $(".technology__contentlefttitle").text("Spaceport");
    $(".technology__contentleftdesc").text(
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );

    btnFirst.removeClass("technology-active");
    btnThird.removeClass("technology-active");

    if ($("body").width() < 1200) {
      imgEle.attr("src", "assets/technology/image-spaceport-landscape.jpg");
    } else {
      imgEle.attr("src", "assets/technology/image-spaceport-portrait.jpg");
    }

    $(window).on("resize", function () {
      if ($(window).width() < 1200) {
        imgEle.attr("src", "assets/technology/image-spaceport-landscape.jpg");
      } else {
        imgEle.attr("src", "assets/technology/image-spaceport-portrait.jpg");
      }
    });
  });

  // click third btn
  btnThird.on("click", function () {
    btnThird.addClass("technology-active");

    $(".technology__contentlefttext").text("The terminology...");
    $(".technology__contentlefttitle").text(" Space capsule");
    $(".technology__contentleftdesc").text(
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );

    btnFirst.removeClass("technology-active");
    btnSecond.removeClass("technology-active");

    if ($("body").width() < 1200) {
      imgEle.attr("src", "assets/technology/image-space-capsule-landscape.jpg");
    } else {
      imgEle.attr("src", "assets/technology/image-space-capsule-portrait.jpg");
    }

    $(window).on("resize", function () {
      if ($(window).width() < 1200) {
        imgEle.attr(
          "src",
          "assets/technology/image-space-capsule-landscape.jpg"
        );
      } else {
        imgEle.attr(
          "src",
          "assets/technology/image-space-capsule-portrait.jpg"
        );
      }
    });
  });
});
