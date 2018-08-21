(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

function sweet() {
  const {value: email} = swal({
    title: 'Subscribe to our service',
    text: 'Input your email address',
    type: 'info',
    input: 'email',
    inputPlaceholder: 'Enter your email address',
    showCloseButton: true,
    showCancelButton: true,
    animation: false,
    customClass: 'animated wobble'
  })
};

$("#gallery").justifiedGallery( {
  rowHeight: 160,
  maxRowHeight: 200,
  lastRow: 'nojustify',
  captions: true,
  cssAnimation: true,
  margins: 3,
  border: 10,
});

new WOW().init();

$('.wp-1').waypoint(function (direction) {
  $('.wp-1').addClass('animated fadeIn')
}, {
  offset: '80%'
});

