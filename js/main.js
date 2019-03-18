$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
});

$(window).resize(function() {
  navbarCollapse();
});

function navbarCollapse() {
  var windowWidth = parseInt($(window).width(), 10);
  $('.hamburger').hide();
  if (windowWidth <= 960) {
    $('.navbar').css('display', 'none');
    $('.navbar').addClass('show');
    $('.hamburger').show();
    $('.item').css('display', 'block');
  } else {
    $('.navbar').css('display', 'block');
    $('.navbar').removeClass('show');
    $('.hamburger').hide();
    $('.item').css('display', 'inline-block');
  }
}

// Add hamburger slidedown
function menuSlidedown() {
  $('.hamburger').click(function() {
    $('.navbar').slideToggle('slow');
  });
}

// Add smooth scrolling
$('#main-nav a').on('click', function(e) {
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
