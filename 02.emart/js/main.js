$(document).ready(function() {
    // 자동배너슬라이드
    function slide() {
        $(".marquee").animate({ left: "-200px" }, 1000, function() {
            $(this).css({ left: 0 });
            $(".marquee").append($(".marquee").children("li").eq(0));
        });
        current++;
        if (current == 8) current = 0;
    }

    timer();
    var current = 0;
    var $interval;

    function timer() {
        var $interval = setInterval(function() {
            slide();
        }, 2000);
    }

    // 배너(모바일)
    $(".hd_btn > img").click(function() {
        $(".top_header").css({ display: "block" });
    });
    $(".top_header").click(function() {
        $(".top_header").css({ display: "none" });
    });
});