$(function () {
  let baseline = -150;
  let m_baseline = -200;
  let mm_baseline = -400;

  let load = function () {
    $(window).on("load", function () {
      if ($(window).scrollTop() == 0) {
        $(".a_left").addClass("on");
      }
      if ($(window).scrollTop() > $(".a_con").offset().top + mm_baseline) {
        $(".world").addClass("on");
      }
      if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
        $(".con2").addClass("on");
      }
      if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
        $(".wedo").addClass("on");
        if (
          $(window).scrollTop() > $(".frame > li:nth-of-type(4)").offset().top
        ) {
          $(".major").addClass("on");
        }
        $(".frame li").each(function () {
          let frameElement = $(this);
          let frameTop = frameElement.offset().top + mm_baseline;
          if ($(window).scrollTop() > frameTop) {
            frameElement.addClass("on");
          }
        });
      }
      if ($(window).scrollTop() > $(".con4").offset().top + mm_baseline) {
        $(".con4").addClass("on");
      }
      if ($(window).scrollTop() > $(".con5").offset().top + mm_baseline) {
        $(".con5").addClass("on");
      }
    });
  };
  load();

  let scroll = function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() == 0) {
        $(".a_left").addClass("on");
      }
      if ($(window).scrollTop() > $(".a_con").offset().top + mm_baseline) {
        $(".world").addClass("on");
      }
      if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
        $(".con2").addClass("on");
      }
      if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
        $(".wedo").addClass("on");
        if (
          $(window).scrollTop() > $(".frame > li:nth-of-type(2)").offset().top
        ) {
          $(".major").addClass("on");
        }
        $(".frame li").each(function () {
          let frameElement = $(this);
          let frameTop = frameElement.offset().top + mm_baseline;
          if ($(window).scrollTop() > frameTop) {
            frameElement.addClass("on");
          }
        });
      }
      if ($(window).scrollTop() > $(".con4").offset().top + m_baseline) {
        $(".con4").addClass("on");
      }
      if ($(window).scrollTop() > $(".con5").offset().top + mm_baseline) {
        $(".con5").addClass("on");
      }
    });
  };
  scroll();

  if ($(window).width() < 431) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() == 0) {
        $(".a_left").addClass("on");
        $(".world").addClass("on");
        $(".con2").addClass("on");
        $(".wedo").addClass("on");
        $(".major").addClass("on");
        $(".con4").addClass("on");
        $(".con5").addClass("on");
        $(".frame li").each(function () {
          let frameElement = $(this);
          frameElement.addClass("on");
        });
      }
    });
    $(window).on("load", function () {
      if ($(window).scrollTop() == 0) {
        $(".a_left").addClass("on");
        $(".world").addClass("on");
        $(".con2").addClass("on");
        $(".wedo").addClass("on");
        $(".major").addClass("on");
        $(".con4").addClass("on");
        $(".con5").addClass("on");
        $(".frame li").each(function () {
          let frameElement = $(this);
          frameElement.addClass("on");
        });
      }
    });
  }
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
