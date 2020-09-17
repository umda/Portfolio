//메인 이미지 애니메이션
// Tip: avoid this ton of code using AniJS ;)

var element = $('#square');

// when mouseover execute the animation
element.mouseover(function() {

    // the animation starts
    element.toggleClass('bounce animated');

    // do something when animation ends
    element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {

        // trick to execute the animation again
        $(e.target).removeClass('bounce animated');

    });

});