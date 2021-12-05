// 스크립트 위로 튕김 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// slick.js

$(function(){
    $('.visual .slide').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed:4000,
        pauseOnhover: false,
        pauseOnFocus: false
    });

    // slide2
    $('.intro_dining .slide2').slick({
        arrows: false,
        dots: false,
        fade: false,
        autoplay: true,
        autoplaySpeed:4000,
        pauseOnhover: false,
        pauseOnFocus: false
    });
});

// 탭메뉴
$(function(){
    $('.introduce .roominfo .tab li a').on('click',function(){
        var num = $('.introduce .roominfo .tab li a').index($(this));
        $('.introduce .roominfo .tabBox').removeClass('on');
        $('.introduce .roominfo .tabBox:eq('+num+')').addClass('on');
    })
})

// scroll animation
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 

// 패밀리사이트
$(function(){
    $('.txt_wrap .btn_fam').on('click',function(){
        $('.fam_site_wrap .item_wrap').slideToggle();
    });
});

// 햄버거 버튼
$(function(){
    $('header .menuopen').on('click', function(){
        $('header .menu_wrap').addClass('on');
    });
    $('.menu_wrap .close').on('click', function(){
        $('.menu_wrap').removeClass('on');
    });
});

// 헤더 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
    if(scrollTop > 200) {$('header').addClass('on');}
    else{$('header').removeClass('on');}
} 