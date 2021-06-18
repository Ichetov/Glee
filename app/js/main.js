$(function () {

 $('.shop__btn').on('click', function(){
$('.filters').slideToggle();
 });

  $('.shop-content__button').on('click', function(){ $('.shop-content__button').removeClass('shop-content__button--active');
  $(this).addClass('shop-content__button--active');
  });

  $('.button-list').on('click', function(){
  $('.shop-content__items').addClass('shop-content__items--list');
  $('.card-product').addClass('card-product--list');
  });

    $('.button-grid').on('click', function(){
    $('.shop-content__items').removeClass('shop-content__items--list');
    $('.card-product').removeClass('card-product--list');
  });

  $('.pagination__btn').on('click', function(){ $('.pagination__btn').removeClass('pagination__btn--active');
  $(this).addClass('pagination__btn--active');
  });

  $('.filters-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    },
  })

  $('.card-product__star').rateYo({
     starWidth: "18px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true,
  });
 
 $('.star').rateYo({
     starWidth: "10px",
     normalFill: "#d6d6d6",
     ratedFill: "#ffcc00",
     readOnly: true,
  });

 

  $('.slider-shop__wrapper').slick({
    dots: true,
    arrows: false,
    speed: 1200,
    autoplay: true,

  });

 

  $('.header__button, .menu a').on('click', function () {
    $('.header__top').toggleClass('header__top--active');
  });

  $('.header__button, .menu a').on('click', function () {
    $('.header__button').toggleClass('header__button--active');
  });

 
  $('.partners__wrap').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ],
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