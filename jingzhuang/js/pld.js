$(function(){
    $('.movesame').mouseover(function(){
        $(this).find('.movecha').stop().animate({"top" : "198"},300)
    });
    $('.movesame').mouseout(function(){
        $(this).find('.movecha').stop().animate({"top" : "329px"},300)
    });
  
});
$(function(){
 var i=0;
 var li = $(".header3 li");
 var n=li.length-1;
 var speed = 300;
 li.not(":first").css({left:"530px"});
 li.eq(n).css({left:"-530px"});
 lxfNext=function (){
   if (!li.is(":animated")) {
        if (i>=n){
            i=0;
            li.eq(n).animate({left:"-530px"},speed);
            li.eq(i).animate({left:"0px"},speed);
        }else{
            i++;
            li.eq(i-1).animate({left:"-530px"},speed);
            li.eq(i).animate({left:"0px"},speed);
        }
    
      }else{};
   };
 lxfLast=function (){
 if (!li.is(":animated")) {
  if (i<=0){
      i=n;
      li.eq(0).animate({left:"530px"},speed);
      li.eq(n).animate({left:"0px"},speed);
  }else{
    i--;
    li.eq(i+1).animate({left:"530px"},speed);
    li.eq(i).animate({left:"0px"},speed);}
  
 
 };
 };
});