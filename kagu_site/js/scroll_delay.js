
$(window).scroll(function(){
    var top = $(".anime").offset().top; 
    var position = top - $(window).height();
    var position_bottom = top + $(".anime").height();
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
      $(".anime").addClass("fade_act");
    }else{
      $(".anime").removeClass("fade_act");
    }
})