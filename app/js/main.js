$(function(){
  
  $('.hero__list').slick({
    dots:false,
    prevArrow: '<button type="button" class="slick-prev slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-next slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-right"></use></svg></button>'
  });

  $('.catalog__btn').on('click',function(){
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.catalog__btn').click(function() { // медленное появление и исчезновение
    var catalog__items = $(this).next();

    if(catalog__items.is(':visible'))
        catalog__items.slideUp('slow');
    else
        catalog__items.slideDown('slow');
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.catalog__items');   // тут указываем класс элемента
		if (!$('.catalog__items').is(e.target) // если клик был не по этому блоку
		    && $('.catalog__items').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.catalog__btn').is(e.target)) { // и если не по кнопке
			$('.catalog__items').slideUp('slow'); // медленно скрываю его
      $('.catalog__btn').removeClass('catalog__btn--active'); //удаляю класс
		}
	});

  $('.user__btn--cart').on('click',function(){
    $('.basket').toggleClass('basket--active');
  });
  
  $('.basket__inactive-part').on('click',function(){
    $('.basket').toggleClass('basket--active');
  });

  $('.basket__close').on('click',function(){
    $('.basket').removeClass('basket--active');
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});