$(document).ready(function() {
  navbarCollapse();
  menuSlidedown();
  hamburger();

  // actionwindowclick(' #hamburger, .navbar', function() {
  //   var windowWidth = parseInt($(window).width(), 10);

  //   // && $('.navbar').is(':visible')
  //   if (windowWidth <= 960) {
  //     $('.navbar').fadeOut(1000);
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
    $('.navbar').css('display', 'none');
    $('.navbar').addClass('show');

    $('.item').css('display', 'block');
  } else {
    $('.navbar').css('display', 'block');
    $('.navbar').removeClass('show');

    $('.item').css('display', 'inline-block');
  }
}

function menuSlidedown() {
  $('#hamburger').click(function() {
    $('.navbar').slideToggle('slow');
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
    document.getElementById('top_button').style.display = 'block';
  } else {
    document.getElementById('top_button').style.display = 'none';
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
