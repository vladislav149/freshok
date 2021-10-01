$(function(){
  
  $('.offers').slick({
    dots:false,
    prevArrow: '<button type="button" class="slick-prev slick-arrows"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrows"></button>'
  });

  $('.catalog__btn').on('click',function(){
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');

  });

  var mixer = mixitup('.product');
});