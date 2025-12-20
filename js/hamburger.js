$(function () {
    $(".hamburger").click(function () {
        $(".sp-nav").toggleClass("open");
        $("html").toggleClass("no-scroll");
        $(this).toggleClass("active");
    });

    // メニュー内リンクをクリックしたら閉じる
    $(".sp-nav a").click(function () {
        $(".sp-nav").removeClass("open");
        $(".hamburger").removeClass("active");
        $("html").removeClass("no-scroll");
    });
});
