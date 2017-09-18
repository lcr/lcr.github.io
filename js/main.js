//jQuery锚点平滑滚动
$(document).ready(function () {
    $('a[href*=#],area[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    800);
                return false;
            }
        }
    });
});
var btn = document.getElementById('backTop');
var winH = document.documentElement.clientHeight;
var timer = null;
var isTop = true;
window.onscroll = function () {
    var toTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (toTop >= winH) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
    if (!isTop) {
        clearInterval(timer);
    }
    isTop = false;
};