//메인 이미지 슬라이드
var current = 0;
var banner = $('#click_slide li');

//자동슬라이드
function 자동() {
    next.click();
}
bbb = setInterval(자동, 5000);

function move(ele, start, end) {
    ele.css({
        left: start
    }).stop().animate({
        left: end
    }, {
        duration: 600,
    })
}

//오른쪽 버튼 클릭하면 움직이기
$('#next').click(function() {
    var 이전 = banner.eq(current);
    move(이전, 0, '-100%')
    current++;
    if (current == banner.size()) current = 0;

    var 현재 = banner.eq(current);
    move(현재, '100%', 0)

    //클릭할때 라운드 안보이게하기
    $(this).css({
        'outline': 'none',
        'border': 'none'
    })
})

//왼쪽 버튼 클릭하면 움직이기
$('#prev').click(function() {
    var 이전 = banner.eq(current);
    move(이전, 0, '100%');
    current--;
    if (current == -1) current = banner.size() - 1;

    var 현재 = banner.eq(current);
    move(현재, '-100%', 0);

    $(this).css({
        'outline': 'none',
        'border': 'none'
    })
})

// -------------랜딩페이지---------------------------------------------
//스크롤할때
$(window).scroll(function() {
    //헤더 고정바 생기기
    if ($(this).scrollTop() >= 150) {
        $('#header').hide();

        $('#header_fix').css('display', 'flex');
    } else {
        $('#header').show();
        $('#header_fix').hide();
    }

    // top버튼 생기기
    if ($(this).scrollTop() >= 500) {
        $('#top').show();
        // $('#bottom').show();
    } else {
        $('#top').hide();
        // $('#bottom').hide();
    }
})


//top버튼 클릭했을때 맨 위로 올라가기
$('#top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    });
})

$('#top').mouseenter(function() {
    $(this).css({
        'background': 'white',
        'color': 'black'
    })
})
$('#top').mouseleave(function() {
    $(this).css({
        'background': '#404040',
        'color': 'white'
    })
})


// --------- aside 매칭하기---------------
var btn = $('#aside a');

btn.each(function() {
    $(this).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        var i = $(this).attr('data-index');
        console.log(i);
        var sectionTT = $('section.section').eq(i).offset().top;
        $('html, body').stop().animate({
            scrollTop: sectionTT
        }, 500)

    })
});

// --------- header 매칭하기---------------
var btn2 = $('.menu a');

$(document).on('click', '.menu li a', function() {

    var j = parseInt($(this).attr('data-index')) + 1;
    console.log(j);
    var sectionTT = $('section.section').eq(j).offset().top;
    $('html, body').stop().animate({
        scrollTop: sectionTT
    }, 500);

    $('.menu li a').css({ //클릭 안한아이들 원상복귀 시키기
        background: 'white',
        color: 'black'
    });

    var i = $(this).attr('data-index');
    $('.menu li').eq(i).find('a').css({ //클릭한아이들. 클릭 한것과 안한것 선택함. 내부에서 색이 바뀜
        background: 'black',
        color: 'white'
    });
    return false;
})



// --------- receive 보이고 안보이고---------------
$('#receiveBtn').click(function() {
    $('#form').show();
    $(this).css({
        'outline': 'none',
        'border': 'none',
        backgroundColor: '#fceed8'
    })
});

$('#submit').click(function() {
    alert('접수되었습니다.');
    $('#form').hide();
    return false;
})

// ---------성별체크하기---------------

$('.check1 button').click(function() {
    $('.check1 button').css({ //버튼에 대해서
        background: 'white'
    })
    $(this).css({ //클릭에 대하여
        background: '#FEF7D7',
        color: '#6B5048',
        'font-size': '1vw',
        'font-weight': 'bold',
        'outline': 'none'
    })
    return false;
})

// ----------마우스휠---------
var elm = ".section";
$(elm).each(function(index) {
    // 개별적으로 Wheel 이벤트 적용
    $(this).on("mousewheel DOMMouseScroll", function(e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail)
            delta = -event.detail / 3;
        var moveTop = $(window).scrollTop();
        var elmSelecter = $(elm).eq(index);
        // 마우스휠을 위에서 아래로
        if (delta < 0) {
            if ($(elmSelecter).next() != undefined) {
                try {
                    moveTop = $(elmSelecter).next().offset().top;
                } catch (e) {}
            }
            // 마우스휠을 아래에서 위로
        } else {
            if ($(elmSelecter).prev() != undefined) {
                try {
                    moveTop = $(elmSelecter).prev().offset().top;
                } catch (e) {}
            }
        }

        // 화면 이동 0.8초(800)
        $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 800,
            complete: function() {}
        });
    });
});