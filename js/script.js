$(document).ready(function() {
	$('.header__burger').click(function(){
        $('.header__burger').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
        $('.header__body').toggleClass('open-menu')
	});
});

$(document).ready(function(){
        $('.slider__body').slick({
                arrows:false,
                dots:true,
                slideToShow:1,
                autoplay:false,
                autoplaySpeed:2000,

        });
});
