$(document).ready(function () {
    $('a[href*=#],area[href*=#]').click(function () {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
sr.reveal('.header-profile', {delay: 800, origin: 'top', distance: '500px'});
sr.reveal('.header-title', {duration: 2000, delay: 1000, distance: '0', rotate: {y: 180}});
sr.reveal('.down', {delay: 300, distance: '0'});
sr.reveal('.icon-name', {delay: 300, origin: 'left', rotate: {x: 100}, distance: '50px'});
sr.reveal('.icon-school', {delay: 600, origin: 'left', rotate: {x: 100}, distance: '50px'});
sr.reveal('.icon-learn', {delay: 900, origin: 'left', rotate: {x: 100}, distance: '50px'});
sr.reveal('.page3-title', {delay: 500, origin: 'right', distance: '100px'});
sr.reveal('.page4-title', {delay: 500, origin: 'top', distance: '140px'});
sr.reveal('.icon-html', {delay: 800});
sr.reveal('.icon-css', {delay: 1000});
sr.reveal('.icon-js', {delay: 1200});
sr.reveal('.page5-title', {delay: 500, origin: 'top', distance: '140px'});
sr.reveal('.page5-img1', {delay: 1200});
sr.reveal('.page5-img2', {delay: 1000});
sr.reveal('.page5-img3', {delay: 800});
sr.reveal('.page5-img4', {delay: 1200});
sr.reveal('.page5-img5', {delay: 1000});
sr.reveal('.contact-title', {delay: 500});
sr.reveal('.sr-weibo', {delay: 1000, origin: 'left', distance: '50px'});
sr.reveal('.sr-facebook', {delay: 900, origin: 'left'});
sr.reveal('.sr-github', {delay: 800, distance: '0'});
sr.reveal('.sr-instagram', {delay: 900, origin: 'right'});
sr.reveal('.sr-linkedin', {delay: 1000, origin: 'right', distance: '50px'});