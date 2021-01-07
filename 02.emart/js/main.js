 /* 기분좋은 혜택 */
 //  var $marquee = $('.main-benefit .marquee').marquee({
 //      allowCss3Support: true,
 //      css3easing: 'linear',
 //      easing: 'linear',
 //      delayBeforeStart: 1000,
 //      direction: 'left',
 //      duplicated: true,
 //      duration: 20000,
 //      gap: 0,
 //      startVisible: true
 //  });

 //  $('.main-benefit .control .stop').on('click', function() {
 //      $marquee.marquee('pause');
 //      $(this).removeClass('on');
 //      $('.main-benefit .control .start').addClass('on');

 //      return false;
 //  });
 //  $('.main-benefit .control .start').on('click', function() {
 //      $marquee.marquee('resume');
 //      $(this).removeClass('on');
 //      $('.main-benefit .control .stop').addClass('on');

 //      return false;
 //  });



 function slide() {
     $(".marquee").animate({ left: "-=187px" }, 1000, function() {
         $(this).css({ "left": 0 });
         $(".marquee").append($(".marquee").children("li").eq(0));
     });
     current++;
     if (current == 5) current = 0;
 }

 timer();
 var current = 0;
 var $interval;

 function timer() {
     var $interval = setInterval(function() { slide() }, 2000);
 }