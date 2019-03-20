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

function menuSlidedown() {
  $('.hamburger').click(function() {
    $('.navbar').slideToggle('slow');
  });
}
