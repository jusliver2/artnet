// $(function() {
//  var array =[0, -1920, -3840, -5760];
//  var count = 0;
//
//  $('.banner').css('overflow','hidden');
//  $('.banner > ul').width(7680);
//
//  var $banner= $('.banner > ul');
//
//  var timer = 0;
//  var delay = 3000;
//
//
//  timer =setInterval(make, delay);
//
//
//  function make(){
//     count++;
//     if(count > size-1){
//         count=0;
//     }/
//     banner();
//   }
//
//   function banner(){
//     $banner.animate({left:array[count]},400);
//   }
// });


$(function(){
  $('.header-sub > .imgswap img').mouseover(function() {
    $('.header-sub >.category').stop().slideDown();
  });
  $('.header-sub ').mouseleave(function() {
    $('.header-sub >.category').stop().slideUp();
  });
    
    
  $('.header-sub> .sub> li').eq(0).mouseover(function(){
      $('.sub-menu').eq(0).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(0).mouseleave(function(){
      $('.sub-menu').eq(0).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(1).mouseover(function(){
      $('.sub-menu').eq(1).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(1).mouseleave(function(){
      $('.sub-menu').eq(1).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(2).mouseover(function(){
      $('.sub-menu').eq(2).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(2).mouseleave(function(){
      $('.sub-menu').eq(2).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(3).mouseover(function(){
      $('.sub-menu').eq(3).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(3).mouseleave(function(){
      $('.sub-menu').eq(3).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(4).mouseover(function(){
      $('.sub-menu').eq(4).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(4).mouseleave(function(){
      $('.sub-menu').eq(4).stop().slideUp();
  })
    $('.header-sub> .sub> li').eq(5).mouseover(function(){
      $('.sub-menu').eq(5).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(5).mouseleave(function(){
      $('.sub-menu').eq(5).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(6).mouseover(function(){
      $('.sub-menu').eq(6).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(6).mouseleave(function(){
      $('.sub-menu').eq(6).stop().slideUp();
  })  
    $('.header-sub> .sub> li').eq(7).mouseover(function(){
      $('.sub-menu').eq(7).stop().slideDown();
  })  
     $('.header-sub> .sub> li').eq(7).mouseleave(function(){
      $('.sub-menu').eq(7).stop().slideUp();
  }) 
})
    
//    $('.header-sub >.h_menu').mouseover(function(){
//        $('.header-sub > .h-menu').attr('src','/images/h_menu2.png');
//    })
$(function(){
  var array=[0,-1920,-3840];
  var count=0;
    
    $('.slider').css('overflow','hidden');
    $('.list').width(5760);
    
    var delay=3000;
    
    timer=setInterval(make,delay);
    
    function make(){
        count++;
        if(count>3){
            count=0;
        }
        banner();
    }
    
    function banner(){
        $('.list > li').animate({left:array[count]},400);
    }
    

// $(function(){
//   var navbtn=$('.navbtn')
//   var category =$('.category')
//
//   navbtn.click(function(){
//     category.toggleClass('on');
//
//     if(category.hasClass('on')){
//     category.animate({'left':'0px'},200);
//     img.attr('src','images/subbtn.png');
//   }else{
//     category.animate({'left':'-300px'},200);
//     img.attr('src','images/h_menu.png');
//   }
// })
//
// })

/*btn*/


            var sidebar=$('#side');
            var navbtn =$('.log > .navbtn');
//            var contents = $('#contents > div');
//            var nav=$('#nav ul li');

            navbtn.click(function(){
                sidebar.toggleClass('on');
                
                if(sidebar.hasClass('on')){
                sidebar.animate({'right':'0px'},200);
                navbtn.attr('src','images/sidebar-btn.png');
              } 
                else{
                sidebar.animate({'right':'-203px'},200);
                navbtn.attr('src','images/sidebar-btn01.png');
              }
            
            });
        
    
//    var media = window.matchMedia("max-width:1080px");
//    
//    var m = matchMedia("max-width: 1080px)");
//        m.media // -> "screen and (min-width: 1024px)"
//        m.matches
//    
//    if (matchMedia("screen and (min-width: 1024px)").matches) {
//  // 1024px 이상에서 사용할 JavaScript
//} else {
//  // 1024px 미만에서 사용할 JavaScript
//}
    
    
    
    function media(){
        var windowWidth = $(window).width();
        if(windowWidth < 500){
           alert("나와라")
        } else {
        //창 가로 크기가 500보다 클 경우
        }
       }

    
    
//    $( window ).resize(function() {
//   arlert('dkdk')//창크기 변화 감지
//});

    
    
    });

        


/**/
