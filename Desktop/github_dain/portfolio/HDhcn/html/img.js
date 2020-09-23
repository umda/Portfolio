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
    // -------------------------click-------------------------
var bottom1 = document.getElementById('bottom1');
var bottom2 = document.getElementById('bottom2');
var bottom3 = document.getElementById('bottom3');
var bottom4 = document.getElementById('bottom4');
var best_bottom1 = document.getElementById('best_bottom1');
var best_bottom2 = document.getElementById('best_bottom2');
var best_bottom3 = document.getElementById('best_bottom3');
var best_bottom4 = document.getElementById('best_bottom4');

bottom1.onclick = function() {
    best_bottom1.style.display = 'flex';
    best_bottom2.style.display = 'none';
    best_bottom3.style.display = 'none';
    best_bottom4.style.display = 'none';
    return false;
}
bottom2.onclick = function() {
    best_bottom1.style.display = 'none';
    best_bottom2.style.display = 'flex';
    best_bottom3.style.display = 'none';
    best_bottom4.style.display = 'none';
    return false;
}
bottom3.onclick = function() {
    best_bottom1.style.display = 'none';
    best_bottom2.style.display = 'none';
    best_bottom3.style.display = 'flex';
    best_bottom4.style.display = 'none';
    return false;
}
bottom4.onclick = function() {
    best_bottom1.style.display = 'none';
    best_bottom2.style.display = 'none';
    best_bottom3.style.display = 'none';
    best_bottom4.style.display = 'flex';
    return false;
}