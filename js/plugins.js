 /*global $, jQuery, alert*/
 $(document).ready(function () {

    // Show Color Option Div When Click On The Gear

    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor", "#0ea55e").end()
        .eq(1).css("backgroundColor", "#dc3545").end()
        .eq(2).css("backgroundColor", "#c407ba").end()
        .eq(3).css("backgroundColor", "#ffc107").end()
        .eq(4).css("backgroundColor", "#0d7ff0");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

    // Cachiing The Scroll Top Button

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if($(this).scrollTop()>= 700) 
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop : 0}, 600)
    });

});

// Loading Screen

$(window).on('load',function () {
    
    $(".loading-overlay .spinner").fadeOut(1000,
        function(){
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000,
                function(){
                    $(this).remove();
                })
        });
});