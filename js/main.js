$(document).ready(function () {
    $('a[href*=#],area[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
window.sr = ScrollReveal({reset: true});
sr.reveal('.header-profile', {duration: 800, delay: 500, origin: 'top', distance: '200px'});
sr.reveal('.header-title', {duration: 800, delay: 1300, origin: 'top', distance: '200px'});
sr.reveal('.down', {duration: 800, delay: 1000, distance: '0'});
sr.reveal('.contact-title', {duration: 500, delay: 1000});
sr.reveal('.sr-weibo', {duration: 800, delay: 200, origin: 'left', distance: '50px'});
sr.reveal('.sr-facebook', {duration: 800, delay: 200, origin: 'left'});
sr.reveal('.sr-github', {duration: 800, delay: 200, distance: '0'});
sr.reveal('.sr-instagram', {duration: 800, delay: 200, origin: 'right'});
sr.reveal('.sr-mail', {duration: 800, delay: 200, origin: 'right', distance: '50px'});