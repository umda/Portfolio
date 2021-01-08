$(document).ready(function() {
    $("#container").addClass("start");

    $("nav li").click(function() {
        $("#container").css("max-width", "100%");
        // 메뉴를 클릭할 때마다 #container의 width가 100%로 변경

        var id = $(this).attr("data-rol");
        // data의 값을 선택자로 사용할수 있게 변수(var id)로 만듬

        $("nav li").removeClass("on");
        $(this).addClass("on");

        $(".content").removeClass("prev this next");
        // 클릭시 가지고 있던 클래스를 모두 지운다

        $("#" + id)
            .addClass("this")
            .prevAll()
            .addClass("prev");
        // #은 문자, id는 변수명 id, prevAll-> 선택한거 전에모든것
        // 메뉴하나 클릭하면 그 태그에는 this라는 클래스가 붙고 나머지는 prev클래스 지정
        // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞ㅇ의 모든 section 태그는 .prev 클래스를 지정한다

        $("#" + id)
            .nextAll()
            .addClass("next");
        // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 section 태그는 .next 클래스를 지정한다
    });

    $(".logo_box").click(function() {
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-width", "1200px");
    });

    // 배너 좌우 버튼 누르고 스크롤
    $(".roll_right").click(function() {
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    });

    $(".roll_left").click(function() {
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    });

    // 도서상세페이지
    $(".book_roll li").click(function() {
        var _this = $(this);
        var liurl = _this.data("url");
        $(".notebook").html();

        $.ajax({
            type: "post", //http 요청방식
            url: liurl, //해당 url
            dataType: "html", //data타입
            success: function(data) {
                //http 요청 성공 후 데이터 전송
                $(".notebook").html(data);
            },
        });
    });
});