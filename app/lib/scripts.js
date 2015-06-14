$(function () {
    var prevScroll = 0,
        curDir = 'down',
        prevDir = 'up';

    $(window).scroll(function () {

        if ($(this).scrollTop() >= prevScroll) {
            curDir = 'down';

            if (curDir != prevDir) {
                $('.header').animate({ top: '-80px' }, 300);
                prevDir = curDir;
            }
        } else {
            curDir = 'up';

            if (curDir != prevDir) {
                $('.header').animate({ top: '0px' }, 300);
                prevDir = curDir;
            }
        }

        prevScroll = $(this).scrollTop();
    });
});
