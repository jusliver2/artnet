$(function(){
  $('.header-sub > .imgswap img').mouseover(function() {
    $('.header-sub >.category').stop().slideDown();
  });
  $('.header-sub').mouseleave(function() {
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
      })