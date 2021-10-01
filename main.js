$(function(){
  
  $('.review__slider').slick({
    arrows:false,
    dots:true
  });
  $('.burger').on('click',function(){
    $('.menu').toggleClass('menu--active');
    $('.burger__middle-line').toggleClass('burger__middle-line--disable');
    $('.burger').toggleClass('burger--rotate');
  });

  var mixer = mixitup('.portfolio__content');
});