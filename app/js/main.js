$(function(){
$('.slider-shop__wrapper').slick({
dots: true,
arrows: false,
// speed: 1200,
// autoplay: true,

});


$('.header__button, .menu a').on('click', function(){
$('.header__top').toggleClass('header__top--active');
});

$('.header__button, .menu a').on('click', function(){
$('.header__button').toggleClass('header__button--active');
});

$('.partners__wrap').slick({
dots: false,
arrows: false,
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