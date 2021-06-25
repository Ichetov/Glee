$(function () {

  $('.related__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slide-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slide-right.svg" alt=""></button>',
      responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.detalis-tabs__link').on('click', function (e) {
e.preventDefault();
$('.detalis-tabs__link').removeClass('detalis-tabs__link--active');
$(this).addClass('detalis-tabs__link--active');
   $('.detalis-tabs__text').removeClass('detalis-tabs__text--active');
    $($(this).attr('href')).addClass('detalis-tabs__text--active');
});

   $('.details-lamp__num').styler();

  $('.details-slide__small').slick({
    asNavFor:'.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
      arrows: false,
  });
  $('.details-slide__big').slick({
    asNavFor:'.details-slide__small',
    draggable: false,
    arrows: false,
    fade: true,
      responsive: [
    {
      breakpoint: 992,
      settings: {
        draggable: true,
      }
    }]
  });

 $('.shop-btn').on('click', function(){
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

  $('.details-lamp__star').rateYo({
     starWidth: "18px",
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