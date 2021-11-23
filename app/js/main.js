$(function(){
 
  
//slick-slider (слайдер и кастомыне кнопки)  
  $('.hero__list').slick({
    dots:false,
    prevArrow: '<button type="button" class="slick-prev slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-next slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-right"></use></svg></button>'
  });


//drop down menu (каталог продуктов)
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

  $('.user__btn').on('click',function(){
    $('.basket').addClass('basket--active');
    $('body').addClass('overlay');
  });


//корзина
  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.basket');   // тут указываем класс элемента
		if (!$('.basket').is(e.target) // если клик был не по этому блоку
		    && $('.basket').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.basket__close').is(e.target)) { // и если не по кнопке//
      $('.basket').removeClass('basket--active'); //удаляю класс
      $('body').removeClass('overlay'); //удаляю класс
		}
	});

  $('.basket__close').on('click',function(){
    $('.basket').removeClass('basket--active');
    $('body').removeClass('overlay');
  });

//кастомные кнопки для input[number]

  $(document).ready(function() {
    $('.btn--minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.btn--plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });



//mixitup (фильтр)
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