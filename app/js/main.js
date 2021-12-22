$(function(){
 
  
//slick-slider (слайдер и кастомыне кнопки)  
  $('.hero__list').slick({
    dots:true,
    prevArrow: '<button type="button" class="slick-prev slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-left"></use></svg></button>',

    nextArrow: '<button type="button" class="slick-next slick-arrows"><svg class="slick-arrows__arrows"><use xlink:href="images/svg_sprite/sprite.svg#icon--arrow-right"></use></svg></button>'
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
  /* the viewport is less than 768 pixels wide */
    $('.brands-product__list').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500,
    });
  }


//drop down menu (каталог продуктов)
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
		if (!$('.catalog__list').is(e.target) // если клик был не по этому блоку
		    && $('.catalog__list').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.catalog__btn').is(e.target)) { // и если не по кнопке
			$('.catalog__list').slideUp('slow'); // медленно скрываю его
      $('.catalog__btn').removeClass('catalog__btn--active'); //удаляю класс
		}
	});

//корзина
  $('.user__btn--cart').on('click',function(){
    $('.basket').addClass('basket--active');
    $('body').addClass('overlay');
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
		if (!$('.basket').is(e.target) // если клик был не по этому блоку
		    && $('.basket').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.close--basket').is(e.target)) { // и если не по кнопке//
      $('.basket').removeClass('basket--active'); //удаляю класс
		}
	});

  $('.close--basket').on('click',function(){
    $('.basket').removeClass('basket--active');
    $('body').removeClass('overlay');
  });

//кастомные кнопки для input[number]

  $(document).ready(function() {
    $('.btn--minus, .btn--plus').click(function () {
      var input = $(this).parent().find('input');
      if ($(this).hasClass('btn--minus')) {
        var count = parseInt(input.val()) - 1;
      } else if ($(this).hasClass('btn--plus')) {
        var count = parseInt(input.val()) + 1;
      } else {
      return;
      }
      count = count < 1 ? 1 : count; 
      count = count > 99 ? 99 : count;
      input.val(count);
      input.change();
      return false;
    });
  });

  $('.quantify__count').bind('change paste keyup', function() {
    if (parseInt($(this).val()) < 1) {
      $(this).val(1);
    }
    if (parseInt($(this).val()) > 99) {
      $(this).val(99);
    }
  });

//мобильная версия поиска

$('.user__btn--search').on('click',function(){
  $('.header__form--mobile').toggleClass('header__form--active');
});

//мобильное меню

  $('.burger').on('click',function(){
    $('.menu-mobile').addClass('menu-mobile--active');
    $('body').addClass('overlay');
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $('.menu-mobile');   // тут указываем класс элемента
		if (!$('.menu-mobile').is(e.target) // если клик был не по этому блоку
		    && $('.menu-mobile').has(e.target).length === 0 // и не по его дочерним элементам
        && !$('.close--menu').is(e.target)) { // и если не по кнопке//
      $('.menu-mobile').removeClass('menu-mobile--active'); //удаляю класс
		}
	});

  $('.close--menu').on('click',function(){
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('body').removeClass('overlay');
  });

//удаляем overlay

  $(document).mouseup(function (e){
		if (!$('.basket').is(e.target)
		    && $('.basket').has(e.target).length === 0
        && !$('.close--basket').is(e.target)
        && !$('.menu-mobile').is(e.target)
		    && $('.menu-mobile').has(e.target).length === 0
        && !$('.close--menu').is(e.target)) {
      $('body').removeClass('overlay');
		}
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