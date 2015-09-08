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
  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
        delegate: 'a',
        type:'inline',
        fixedContentPos: true,
    		fixedBgPos: true,
    		overflowY: 'auto',
    		closeBtnInside: true,
    		preloader: false,
    		midClick: true,
    		removalDelay: 300,
    		mainClass: 'my-mfp-zoom-in',
        gallery: {
          enabled: true
        }
     });
  });

  //fitvids
  $('#main-content').fitVids();

  //ie svgs
  function svgasimg() {
  return document.implementation.hasFeature(
    'http://www.w3.org/TR/SVG11/feature#Image', '1.1');
}

if (!svgasimg()){
  var e = document.getElementsByTagName('img');
  if (!e.length){
    e = document.getElementsByTagName('IMG');
  }
  for (var i=0, n=e.length; i<n; i++){
    var img = e[i],
        src = img.getAttribute('src');
    if (src.match(/svgz?$/)) {
      /* URL ends in svg or svgz */
      img.setAttribute('src',
             img.getAttribute('data-fallback'));
    }
  }
}
});

//nav bar fanciness
var windowSize;

function getWindowSize() {
    windowSize = $(window).innerWidth();
}

getWindowSize();

$(window).resize(function() {
    getWindowSize();
    if (windowSize < 601) {
      $('#menu .social-share').hide();
    }
    if (windowSize < 768) {
      $('#menu .home').hide();
    }
});

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
