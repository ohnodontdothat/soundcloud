$(function () {
  let baseline = -150;
  let mm_baseline = -400;

  $(".question ul li .btn").on("click", function () {
    let i = $(this).parent("span").parent("h3").parent("li").index();
    console.log(i);
    $(".question ul li").stop().children(".content").hide();
    $(".question ul li").stop().eq(i).children(".content").show();
  });
  $(window).on("load", function () {
    if ($(window).scrollTop() == 0) {
      $(".a_title").addClass("on");
    }
    if ($(window).scrollTop() > $(".con1").offset().top + mm_baseline) {
      $(".con1").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".con2").addClass("on");
    }
    if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
      $(".con3").addClass("on");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() == 0) {
      $(".a_title").addClass("on");
    }
    if ($(window).scrollTop() > $(".con1").offset().top + mm_baseline) {
      $(".con1").addClass("on");
    }
    if ($(window).scrollTop() > $(".con2").offset().top + mm_baseline) {
      $(".con2").addClass("on");
    }
    if ($(window).scrollTop() > $(".con3").offset().top + mm_baseline) {
      $(".con3").addClass("on");
    }
  });

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
