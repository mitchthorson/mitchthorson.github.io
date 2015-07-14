//global variables


var $portraitCover;
var $window;
var $projectContainer;

function onScroll(e) {
    //update opacity of portrait cover
    var scrollY = window.scrollY;
    var winHeight = window.innerHeight;
    var docHeight = $(document).height();
    var maxScroll = docHeight - winHeight;
    var ratioScrolled = (scrollY / maxScroll) * 1.5;

    $portraitCover.css({"opacity": ratioScrolled});

    //check and see if we should show projects
    var projectTop = $projectContainer.offset().top;
    if ((winHeight + scrollY) > projectTop + 100) {
        console.log("show");
        $projectContainer.addClass("projects-show");
    } else {
        $projectContainer.removeClass("projects-show");
    }

}

function showProjects() {

}

$(document).on("ready", function() {
    $portraitCover = $('.main-portrait-cover-js');
    $projectContainer = $('.project-list');
    $window = $(window);

    onScroll();


    $window.on("scroll", onScroll);
});
