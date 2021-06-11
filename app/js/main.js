$(function () {

  $('.product-shop__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.product-shop__from').text(data.from);
      $('.product-shop__to').text(data.to);
    },
    onChange: function (data) {
      $('.product-shop__from').text(data.from);
      $('.product-shop__to').text(data.to);
    },
  })


  $('.slider-shop__wrapper').slick({
    dots: true,
    arrows: false,
    // speed: 1200,
    // autoplay: true,

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