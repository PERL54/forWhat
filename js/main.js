function slowScroll(id) 
{ 
    var offset = 0;
    $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
}

$(function()
{

        $("#typed").typed({
            strings: [" the incredible.", " the beautiful.", " meaning."],
            typeSpeed: 50,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
            contentType: 'html',      
        });

}
);

jQuery(document).ready(function($) {
  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 1600);

  });
});



const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

const windowInnerWidth = document.documentElement.clientWidth
const windowInnerHeight = document.documentElement.clientHeight

window.addEventListener('scroll', function() {
    document.getElementById('current-scroll').style.width = ((window.pageYOffset * windowInnerWidth) / pageHeight).toString() + 'px';
});

$(document).ready(function()
{
    var $circle = $('.circle');
    $circle.css('padding', 200)
});

$(function() {
    
    $('.drag').draggable({containment:".about-page"});
    
});
