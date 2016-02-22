// --------------------------------------------------------- //
// READY
// --------------------------------------------------------- //
$(document).ready(function(){
  $('.showcase').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true
  });

});

// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "I'm a self-taught programmer",
      "I'm using photoshop and sketch a lot",
      "I play around with Wordpress at work",
      "I code CSS, HTML and Javascript",
      "I'm learning the MEAN stack this year",
      "I'm in process of making products users love",
      "I'm a self-taught programmer"
    ],
    typeSpeed: 50,
    startDelay: 50,
    showCursor: false
  });
  
});


// --------------------------------------------------------- //
// BACK TO TOP
// --------------------------------------------------------- //
$('#backtotop').click(function(){
        
$('html,body').animate({scrollTop: 0},2000);
return false;

});

