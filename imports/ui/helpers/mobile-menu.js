// show or hide mobile menu
export const toggleMobileMenu = () => {
  if ($('body').hasClass('show-nav')) {
    $('body').removeClass('show-nav').addClass('hide-nav');

    setTimeout(function() {
        $('body').removeClass('hide-nav');
    }, 500);

  } else {
    $('body').removeClass('hide-nav').addClass('show-nav');
  }
};
