  /* global $ */
  $(document).ready(function() {
    resizeWindow();

    $(window).resize(function(){
      resizeWindow();
    });

    $("#mobileNavButton").click(function() {
      $("#mobileNav").show().animate({
        left: '25%'
      });
    });
    $("#mobileNavClose, #mobileNav li").click(function() {
      var target = ($(this).data("target"));

      $(".collapse").hide();
      $("#mobileNav").animate({
        left: '100%'
      }, 400, function() {
        $(this).hide();

        if (target && target.length > 0) {
          $(".col-right").show();
          $(target).show();
          $("header").css("height", "300px");
          $("#objTitle, #objective").hide();
        } else {
          $(".col-right").hide();
          $("header").css("height", "100%");
          $("#objTitle, #objective").show();
        }
      });
    });
  });

  function resizeWindow() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    if (windowWidth < 576) {
      $("body, #root, .App").height(windowHeight+'px');
    }
  }