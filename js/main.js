$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
  hamburger();
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
  // Toggle class open
  $('#hamburger').click(function() {
    $(this).toggleClass('open');
  });
  //Closing hamburger menu after clicking link
  $('#main_nav a').on('click', function() {
    $('#hamburger').click();
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
    $('#button__top').fadeIn();
  } else {
    $('#button__top').fadeOut();
  }
}

// SMOOTH SCROLL FOR NAVBAR
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

// SMOOTH SCROLL FOR TOP BUTTON
function smoothTopButton() {
  $('#button__top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
}

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
