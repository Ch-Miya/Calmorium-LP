$(function () {
    $(".hamburger").on("click", function () {
        const isOpen = $(".sp-nav").hasClass("open");

        if (isOpen) {
            $(".sp-nav").removeClass("open");
            $("body").removeClass("no-scroll");
        } else {
            $(".sp-nav").addClass("open");
            $("body").addClass("no-scroll");
        }

        $(this).toggleClass("active");
    });
});
