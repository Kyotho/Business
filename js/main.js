$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
  hamburger();

  actionwindowclick('.navbar , #hamburger', function() {
    $('.navbar').hide('slow');
  });
});

$(window).resize(function() {
  navbarCollapse();
});

function navbarCollapse() {
  var windowWidth = parseInt($(window).width(), 10);

  if (windowWidth <= 960) {
    $('.navbar').css('display', 'none');
    $('.navbar').addClass('show');

    $('.item').css('display', 'block');
  } else {
    $('.navbar').css('display', 'block');
    $('.navbar').removeClass('show');

    $('.item').css('display', 'inline-block');
  }
}

// function menuSlidedown() {
//   $('#hamburger').click(function() {
//     $('.navbar').slideToggle('slow');
//   });
// }
function menuSlidedown() {
  // $('#hamburger').click(function() {
  //   $('.navbar').show('slow');
  // });
  $('#hamburger').click(function() {
    $('.navbar').slideToggle('slow');
  });
}

function hamburger() {
  $('#hamburger').click(function() {
    $(this).toggleClass('open');
  });
}
// var nav = document.querySelector('navbar');
// var specifiedElement = document.querySelector('nav');
// document.addEventListener('click', function(event) {
//   var isClickInside = specifiedElement.contains(event.target);
//   if (!isClickInside && nav.className == 'show') {
//     nav.className = '';
//   }
// });

function actionwindowclick(elem, action) {
  $(window).on('click', function(e) {
    if (
      !$(elem).is(e.target) && // if the target of the click isn't the container...
      $(elem).has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      action();
    }
  });
}
