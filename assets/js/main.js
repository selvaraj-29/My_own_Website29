
// navbar-scroll color change
$(window).scroll(function () {
				  $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
				});

// Nav-links Scroll
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#navbarNav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }  
  });
});

// More-btn Scroll
$(document).ready(function(){
  $('body').scrollspy({target: ".container", offset: 50});   

  $("#home a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }  
  });
});


