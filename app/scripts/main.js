'use strict';

$(window).load(function() {
  // Menu
  var $menuButton = $('#menu-button');
  var $menuNav = $('#menu');

  $menuButton.on('click', function(e) {
    e.preventDefault();

    if ($menuNav.hasClass('menu-open')) {
      $menuButton.removeClass('x');
    } else {
      $menuButton.addClass('x');
    }

    $menuNav.toggleClass('menu-open');
  });

  //lightboxes
  $('.open-popup-link').magnificPopup({
    type:'inline',
    fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
  });

  //fitvids
  $('#main-content').fitVids();
});

//sets nav to sticky at certain height
$(window).scroll(function () {
  var navHeight = $('.masthead .menu-container').height();
  if( $(window).scrollTop() > navHeight && !($('#menu').hasClass('sticky'))){
    $('#menu').addClass('sticky');
    // $('#menu .social-share').show();
  } else if ($(window).scrollTop() < navHeight){
    $('#menu').removeClass('sticky');
    // $('#menu .social-share').hide();
  }
});
