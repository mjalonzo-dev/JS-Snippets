// Scroll to div
function goToByScroll(id){
    jQuery('html,body').animate({scrollTop: jQuery(id).offset().top},'slow');
}

// Scroll to Page Section
jQuery('#main-menu a').click(function() {

    id = jQuery(this).attr('href');

    goToByScroll(id);

    return false;
});