$(document).ready(function() {
    var current = 0;
    var banner = $('.img_slide li');
    $('#next').click(function() {
        var prev = banner.eq(current);
        move(prev, 0, '-100%');
        current++;
        var prev = banner.eq(current);
        move(prev, '100%', 0);
        if (current == banner.size()) {
            current = 0;
            var prev = banner.eq(current);
            prev.each(function(index, element) {
                move(prev, '100%', 0);
            });
        }
    });

    $('#prev').click(function() {
        var prev = banner.eq(current);
        move(prev, 0, '100%');
        current--;
        var prev = banner.eq(current);
        move(prev, '-100%', 0);
        if (current == banner.size()) {
            current--;
            current = banner.size() - 1;
            var prev = banner.eq(current);
            prev.each(function(index, element) {
                move(prev, '-100%', 0);
            });
        }
    });

    function move(tg, start, end) {
        tg.css('left', start)
            .stop()
            .animate({
                left: end
            }, {
                duration: 500,
                ease: 'easeOutCubic'
            });
    }
    $('#click_slide').on('swipeleft', function() {
        $('#next').trigger('click');
    });
    $('#click_slide').on('swiperight', function() {
        $('#prev').trigger('click');
    });


    //     //자동슬라이드 구현하기
    //     function 자동() {
    //         abc = setInterval(function() {
    //             $('#right').trigger('click');
    //         }, 2000);
    //     }
    //     자동();
    //     $('.wrapper').hover(function() {
    //         clearInterval(abc);
    //     }, function() {
    //         자동();
    //     });
});



// -------------------------best_slide-------------------------
var slidebox = document.getElementById('slidebox');
var prev1 = document.getElementById('prev1');
var next1 = document.getElementById('next1');

var num1 = 0;
var box = 385;
next1.onclick = function() {
    num1++;
    if (num1 > 1) {
        num1 = 1;
        return;
    }
    console.log(num1);
    slidebox.style.left = -num1 * box + 'px';
}
prev1.onclick = function() {
    num1--;
    if (num1 < 0) {
        num1 = 0;
        return;
    }
    console.log(num1);

    slidebox.style.left = -num1 * box + 'px';
}


//금액권 선택
$(function() {
    $('#bottom1').click(function() {
        $('.best_bottom1').show();
        $('.best_bottom2').hide();
        $('.best_bottom3').hide();
        $('.best_bottom4').hide();
        return false;
    })
    $('#bottom2').click(function() {
        $('.best_bottom1').hide();
        $('.best_bottom2').show();
        $('.best_bottom3').hide();
        $('.best_bottom4').hide();
        return false;
    })
    $('#bottom3').click(function() {
        $('.best_bottom1').hide();
        $('.best_bottom2').hide();
        $('.best_bottom3').show();
        $('.plus').show();
        $('.plus1').show();
        $('.equal').show();
        $('.best_bottom4').hide();
        return false;
    })
    $('#bottom4').click(function() {
        $('.best_bottom1').hide();
        $('.best_bottom2').hide();
        $('.best_bottom3').hide();
        $('.best_bottom4').show();
        $('.plus').show();
        $('.plus1').show();
        $('.equal').show();
        return false;
    })
})

//순환하는 이미지 슬라이드
$('#prev2').click(function() {
    $('.box li').last().insertBefore($('.box li').first());
    $('.box').css('left', '-250px');
    $('.box').stop().animate({
        left: 0
    })
})

$('#next2').click(function() {
    $('.box li').first().insertAfter($('.box li').last());
    $('.box').css('left', '0');
    $('.box').stop().animate({
        left: 0
    })
})