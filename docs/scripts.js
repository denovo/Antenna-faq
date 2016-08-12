/* toggle show hide of submenu titles for left nav */
var sectionNavTitles = document.querySelectorAll("span.section");

var toggleSubMenu = function() {
    $(this).toggleClass('expanded');
};

for (var i = 0; i < sectionNavTitles.length; i++) {
    sectionNavTitles[i].addEventListener('click', toggleSubMenu, false);
}

/* current page highlight and expand releavant parent nav on page load */

var currentLinks = $.find('.section + ul .current');

$.each(currentLinks, function(){
    var parentList = $(this).closest('ul');
    var sectionHeading = parentList.prev('.section');
    sectionHeading.addClass('expanded');

});
