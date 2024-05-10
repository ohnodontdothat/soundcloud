$(function () {
  let baseline = -200;
  let m_baseline = -500;

  /*load*/
  $(window).on("load", function () {
    if ($(window).scrollTop() == 0) {
      /*header 떠오르는 텍스트*/
      $(".visual").addClass("on");
      setTimeout(function () {
        $(".circle_menu").addClass("on");
      }, 1500);
      $("header").css({ backgroundColor: "transparent" });
    }
    if ($(window).scrollTop() > $(".container").offset().top + baseline) {
      $("header").css({ backgroundColor: "#111" });
      countFn_1();
      stop_1 = setInterval(countFn_1, 100);
      countFn_2();
      stop_2 = setInterval(countFn_2, 100);
    }
    if ($(window).scrollTop() > $(".con2").offset().top + m_baseline) {
      pop();
    }
    if ($(window).scrollTop() > $(".con4").offset().top + baseline) {
      logo();
      $(".first_img").addClass("on");
      $(".title").addClass("on");
      if (
        $(window).scrollTop() >
        $(".con4 .second").offset().top + m_baseline
      ) {
        $(".project_img").addClass("on");
        $(".pro_text").addClass("on");
      }
    }
    if ($(window).scrollTop() > $(".con5").offset().top + baseline) {
      $(".con5 .right").addClass("on");
      $(".con6").addClass("on");
    }
  });

  /*scroll*/
  $(window).on("scroll", function () {
    if ($(window).scrollTop() == 0) {
      $("header").css({ backgroundColor: "transparent" });
    }
    if ($(window).scrollTop() > $(".container").offset().top + baseline) {
      $("header").css({ backgroundColor: "#111" });
      countFn_1();
      stop_1 = setInterval(countFn_1, 20);
      countFn_2();
      stop_2 = setInterval(countFn_2, 10);
    }
    if ($(window).scrollTop() > $(".con2").offset().top + m_baseline) {
      pop();
    }
    if ($(window).scrollTop() > $(".con3").offset().top + baseline) {
    }
    if ($(window).scrollTop() > $(".con4").offset().top + baseline) {
      logo();
      $(".first_img").addClass("on");
      $(".title").addClass("on");
      if (
        $(window).scrollTop() >
        $(".con4 .second").offset().top + m_baseline
      ) {
        $(".project_img").addClass("on");
        $(".pro_text").addClass("on");
      }
    }
    if ($(window).scrollTop() > $(".con5").offset().top + baseline) {
      $(".con5 .right").addClass("on");
      $(".con6").addClass("on");
    }
  });

  /*con1 숫자 카운트*/
  let count_1 = 0;
  let count_2 = 1;
  let stop_1;
  let stop_2;

  let countFn_1 = function () {
    count_1 = count_1 + 40;
    if (count_1 > 4000) {
      clearInterval(stop_1);
    } else {
      $("h2:nth-of-type(1) span").html(count_1);
    }
  };
  let countFn_2 = function () {
    count_2 = count_2 + 2;
    if (count_2 > 375) {
      clearInterval(stop_2);
    } else {
      $("h2:nth-of-type(2) span").html(count_2);
    }
  };

  /*흐르는 이미지*/
  let animationDuration = 5000;
  let img = function () {
    setInterval(function () {
      $(".img")
        .stop()
        .animate({ left: "-100%" }, animationDuration, "linear", function () {
          $(".img>.img_wrap:first-child").appendTo(".img");
          $(".img").css({ left: "0%" });
          img();
        });
    });
  };
  img();

  /*6가지 소개*/
  let pop = function () {
    {
      $(".text").each(function () {
        let textElement = $(this);
        let textTop = textElement.offset().top + m_baseline;
        if ($(window).scrollTop() > textTop) {
          textElement.addClass("on");
        }
      });
    }
  };
  /*로고이미지 회전효과 */
  let logo = function () {
    $(".project_img").each(function () {
      let logoElement = $(this);
      let logoTop = logoElement.offset().top + m_baseline;
      if ($(window).scrollTop() > logoTop) {
        logoElement.addClass("on");
      }
    });
  };
});
