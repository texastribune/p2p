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

var windowSize;

function getWindowSize() {
    windowSize = $(window).innerWidth();
}

getWindowSize();

$(window).resize(function() {
    getWindowSize();
    console.log(windowSize);
    if (windowSize < 601) {
      $('#menu .social-share').hide();
    }
    if (windowSize < 768) {
      $('#menu .home').hide();
    }
});

//sets nav to sticky at certain height
$(window).scroll(function () {
  var navHeight = $('.masthead .menu-container').height();
  if( $(window).scrollTop() > navHeight && !($('#menu').hasClass('sticky'))){
    $('#menu').addClass('sticky');
    if (windowSize > 600) {
      $('#menu .social-share').show();
    }
    if(windowSize > 767) {
      $('#menu .home').show();
    }
  } else if ($(window).scrollTop() < navHeight){
    $('#menu').removeClass('sticky');
    $('#menu .social-share').hide();
    $('#menu .home').hide();
  }
});
