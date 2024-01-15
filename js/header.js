$(function () {
  let i = 0;
  /*bar효과*/
  $(".bars").on("click", function () {
    console.log(i);
    if (i == 0) {
      $(".bar:nth-of-type(2)").hide();
      $(".bar:nth-of-type(1)").animate(
        {
          top: "50%",
          rotate: "45deg",
        },
        60
      );
      $(".bar:nth-of-type(3)").animate(
        {
          top: "50%",
          rotate: "-45deg",
        },
        60
      );
      $(".side_menu").animate({ left: "0%", zIndex: "96" }, 600);
      $("header").addClass("on");
      i = 1;
    } else {
      $(".bar:nth-of-type(1)").animate(
        {
          top: "0%",
          rotate: "0deg",
        },
        60
      );
      $(".bar:nth-of-type(3)").animate(
        {
          top: "100%",
          rotate: "0deg",
        },
        60
      );
      $(".bar:nth-of-type(2)").show();
      $(".side_menu").animate({ left: "100%" }, 600);
      $("header").removeClass("on");
      i = 0;
    }
  });
});
