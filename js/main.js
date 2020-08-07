$(document).ready(function(){
    $("#titleToQuote").click(function(){
        $('html, body').animate({
            scrollTop: $("#quote-section").offset().top}, 1250);
    });

    $('.quoteToAbout, #toAbout').click(function(){
       $('html, body').animate({
           scrollTop: $("#about-section").offset().top}, 1250);
    });

     $('.menu').click(function() {
          $('ul').toggleClass('active');
     })

     $.getJSON("https://api.ipify.org?format=json",
    function(data) {
        $(".ip").html(data.ip);
    })
});

$(window).load(function() {
  $("body").removeClass("preload");
});
