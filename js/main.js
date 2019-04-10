$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
  hamburger();

  // actionwindowclick(' #hamburger, .navbar__nav', function() {
  //   var windowWidth = parseInt($(window).width(), 10);

  //   // && $('.navbar__nav').is(':visible')
  //   if (windowWidth <= 960) {
  //     $('.navbar__nav').fadeOut(1000);
  //     //  $('#hamburger').toggleClass('open');
  //   }
  // });
});

$(window).resize(function() {
  navbarCollapse();
});

function navbarCollapse() {
  var windowWidth = parseInt($(window).width(), 10);

  if (windowWidth <= 960) {
    $('.navbar__nav').css('display', 'none');
    $('.navbar__nav').addClass('show');

    $('.nav__item  ').css('display', 'block');
  } else {
    $('.navbar__nav').css('display', 'block');
    $('.navbar__nav').removeClass('show');

    $('.nav__item  ').css('display', 'inline-block');
  }
}

function menuSlidedown() {
  $('#hamburger').click(function() {
    $('.navbar__nav').slideToggle('slow');
  });
}

function hamburger() {
  $('#hamburger').click(function() {
    $(this).toggleClass('open');
  });
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById('button__top').style.display = 'block';
  } else {
    document.getElementById('button__top').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome, Firefox etc
}

//FUNCTION FOR CLOSING NAVBAR VIA CLICKING ANYWHERE
// function actionwindowclick(elem, action) {
//   $(window).on('click', function(e) {
//     if (
//       !$(elem).is(e.target) && // if the target of the click isn't the container...
//       $(elem).has(e.target).length === 0
//     ) {
//       // ... nor a descendant of the container
//       action();
//     }
//   });
// }

$('#main_nav a').on('click', function(e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

// SLIDER
var slideIndex = 1;

showSlide(slideIndex);

function plusSlides(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;

  var slides = document.getElementsByClassName('slideshow__slider');

  var dots = document.getElementsByClassName('dots');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';

  dots[slideIndex - 1].className += ' active';
}
