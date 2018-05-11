/*global $*/

$(".menu-toggle").click(function () {
    "use strict";
    $(".nav").toggleClass("nav-open", 500);
    $(this).toggleClass('open');
    $(".sub-menu").slideUp("visible");
});

$("#dropdown li").click(function () {
    "use strict";
    $(".sub-menu").slideUp("hide");
    $(this).find('.sub-menu').slideToggle("visible");
});

$(".categories").click(function (e) {
    "use strict";
    e.stopPropagation();
});

