$(function(){
$('.slider-shop__wrapper').slick({
dots: true,
arrows: false,
speed: 1200,
autoplay: true,

});

$('.partners__wrap').slick({
dots: true,
arrows: false,
speed: 1200,
});





var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
var mixer = mixitup(containerEl1, config);
var mixer = mixitup(containerEl2, config);
  

});