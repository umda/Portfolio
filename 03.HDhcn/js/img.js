function 자동() {
    var next = document.getElementById('next');
    next.onclick();
}
bbb = setInterval(자동, 2000);


var pannel = document.getElementById('pannel');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var num = 0;
// var 현재 = 0;

var width = 1920;
next.onclick = function() {
    num++;
    if (num > 5) num = 0;

    pannel.style.left = -num * width + 'px';
    //  현재 = num;
}
prev.onclick = function() {
    num--;
    if (num < 0) num = 5;

    pannel.style.left = -num * width + 'px';
}

//마우스 올렸을때 자동 슬라이드 멈추기
var click_slide = document.getElementById('click_slide');
click_slide.onmouseover = function() {
    clearInterval(bbb);
}
click_slide.onmouseout = function() {
    bbb = setInterval(자동, 2000);

}