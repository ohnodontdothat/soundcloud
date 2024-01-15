$(function () {
  let baseline = -150;
  let m_baseline = -200;
  let mm_baseline = -400;

  setInterval(function () {
    $(".slide_wrap").animate({ left: "-100%" }, function () {
      $(".slide:first-child").appendTo(".slide_wrap");
      $(".slide_wrap").css({ left: "0%" });
    });
  }, 3000);

  $(window).on("load", function () {
    if ($(window).scrollTop() == 0) {
      $(".l_title h2").addClass("on");
    }
    if ($(window).scrollTop() > 200) {
      $(".sub li").addClass("on");
      $(".con1 > p").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".con2").addClass("on");
      if ($(window).scrollTop() > $(".con2").offset().top + 300) {
        $(".pl_text").addClass("on");
        $(".playlist").addClass("on");
      }
    }
    if ($(window).scrollTop() > $(".con4").offset().top + mm_baseline) {
      $(".con4").addClass("on");
    }
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() == 0) {
      $(".l_title h2").addClass("on");
    }
    if ($(window).scrollTop() > 200) {
      $(".sub li").addClass("on");
      $(".con1 > p").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".con2").addClass("on");
      if ($(window).scrollTop() > $(".con2").offset().top + 100) {
        $(".pl_text").addClass("on");
        $(".playlist").addClass("on");
      }
    }
    if ($(window).scrollTop() > $(".con4").offset().top + mm_baseline) {
      $(".con4").addClass("on");
      if ($(window).scrollTop() > $(".con4").offset().top + 50) {
        $(".li_wrap").addClass("on");
      }
      if ($(window).scrollTop() > $(".con4").offset().top + 200) {
        $(".con4 .button").addClass("on");
      }
    }
  });

  /*흐르는 이미지*/
  function animateCon3() {
    let img = $(".con3 .img");
    let animationDuration = 8000;

    function step1() {
      img.animate({ left: "-100%" }, animationDuration, "linear", function () {
        $(".con3>.img>.img_wrap:first-child").appendTo(img);
        img.css({ left: "0%" });
        requestAnimationFrame(step1);
      });
    }

    requestAnimationFrame(step1);
  }
  animateCon3();

  /* 흐르는 이미지 footer */
  function animateFooter() {
    let imgWrapper = $("footer .img");
    let animationDuration = 8000;

    function step() {
      imgWrapper.animate(
        { left: "-100%" },
        animationDuration,
        "linear",
        function () {
          $("footer_img>.img>.img_wrap:first-child").appendTo(imgWrapper);
          imgWrapper.css({ left: "0%" });
          requestAnimationFrame(step);
        }
      );
    }

    requestAnimationFrame(step);
  }

  animateFooter();
});
