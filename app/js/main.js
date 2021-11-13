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
    var catalog__list = $(this).next();

    if(catalog__list.is(':visible'))
        catalog__list.slideUp('slow');
    else
        catalog__list.slideDown('slow');
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.catalog__list');   // тут указываем класс элемента
		if (!$('.catalog__list').is(e.target) // если клик был не по этому блоку
		    && $('.catalog__list').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.catalog__btn').is(e.target)) { // и если не по кнопке
			$('.catalog__list').slideUp('slow'); // медленно скрываю его
      $('.catalog__btn').removeClass('catalog__btn--active'); //удаляю класс
		}
	});

  $('.banner__link').on('click',function(){
    $('.basket').addClass('basket--active');
    $('.overlay').addClass('overlay--active');
  });

  $('.user__btn--cart').on('click',function(){
    $('.basket').addClass('basket--active');
    $('.overlay').addClass('overlay--active');
  });
  
  $('.overlay').on('click',function(){
    $('.basket').removeClass('basket--active');
    $('.overlay').removeClass('overlay--active');
  });

  $('.basket__close').on('click',function(){
    $('.basket').removeClass('basket--active');
    $('.overlay').removeClass('overlay--active');
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