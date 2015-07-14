//global variables


var $portraitCover;
var $window;

function onScroll(e) {
    var scrollY = window.scrollY;
    var winHeight = window.innerHeight;
    var docHeight = $(document).height();
    var maxScroll = docHeight - winHeight;
    var ratioScrolled = scrollY / maxScroll;

    $portraitCover.css({"opacity": ratioScrolled});
}

$(document).on("ready", function() {
    $portraitCover = $('.main-portrait-cover-js');
    $window = $(window);


    $window.on("scroll", onScroll);
});
