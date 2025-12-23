$(function () {
    $(".hamburger").on("click", function () {
        const isOpen = $(".sp-nav").hasClass("open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $(".sp-nav a").on("click", function () {
        closeMenu();
    });

    function openMenu() {
        $(".sp-nav").addClass("open");
        $(".hamburger").addClass("active");
        $("body").addClass("no-scroll");
    }

    function closeMenu() {
        $(".sp-nav").removeClass("open");
        $(".hamburger").removeClass("active");
        $("body").removeClass("no-scroll");
    }
});
