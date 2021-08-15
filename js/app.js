$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $(".scroll-up").addClass("show-btn");
        } else {
            $(".scroll-up").removeClass("show-btn");
        }
    });
});
