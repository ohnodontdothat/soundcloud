$(function () {
  let baseline = -150;
  let m_baseline = -200;
  let mm_baseline = -400;

  $(window).on("load", function () {
    if ($(window).scrollTop() == 0) {
      $(".ar_left").addClass("on");
    }
    if ($(window).scrollTop() > $(".con1").offset().top + mm_baseline) {
      $(".con1").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".ex_r li").each(function () {
        let exElement = $(this);
        let exTop = exElement.offset().top + mm_baseline;
        if ($(window).scrollTop() > exTop) {
          exElement.addClass("on");
        }
      });
      if ($(window).width() < 431) {
        $(".con2 .ex_l").addClass(".mobile_sticky");
      }
    }
    if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
      if ($(window).width() < 431) {
        $(".con2 .ex_l").removeClass(".mobile_sticky");
      }
      $(".con3").addClass("on");
    }
    if ($(window).scrollTop() > $(".con4").offset().top + mm_baseline) {
      $(".con4").addClass("on");
    }
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() == 0) {
      $(".ar_left").addClass("on");
    }
    if ($(window).scrollTop() > $(".con1").offset().top + mm_baseline) {
      $(".con1").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".ex_r > ul > li").each(function () {
        let exElement = $(this);
        let exTop = exElement.offset().top + mm_baseline;
        if ($(window).scrollTop() > exTop) {
          exElement.addClass("on");
        }
      });
      if ($(window).width() < 431) {
        $(".con2 .ex_l").addClass(".mobile_sticky");
      }
    }
    if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
      if ($(window).width() < 431) {
        $(".con2 .ex_l").removeClass(".mobile_sticky");
      }
      $(".con3").addClass("on");
    }
    if ($(window).scrollTop() > $(".con4").offset().top + mm_baseline) {
      $(".con4").addClass("on");
    }
  });
  setInterval(function () {
    slide();
  }, 5000);
  $(".next").on("click", function () {
    clearInterval(function () {
      slide();
    });
    $(".con4_content")
      .stop()
      .animate(
        {
          left: "-100%",
        },
        function () {
          $(".arti_wrap:first-child").appendTo(".con4_content");
          $(".con4_content").css({ left: "0%" });
        }
      );
  });
  $(".prev").on("click", function () {
    $(".arti_wrap:last-child").prependTo(".con4_content");
    $(".con4_content")
      .stop()
      .animate({ left: "100%" }, function () {
        $(".con4_content").css({ left: "0%" });
      });
  });
  let slide = function () {
    clearInterval(function () {
      slide();
    });
    $(".con4_content")
      .stop()
      .animate(
        {
          left: "-100%",
        },
        function () {
          $(".arti_wrap:first-child").appendTo(".con4_content");
          $(".con4_content").css({ left: "0%" });
        }
      );
  };

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
