$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active")
    $(".menu ul").slideToggle()
  });

  $(window).resize(function(){
    let w = $(window).width();

    if(w>768){
      $(".menu ul").removeAttr("style")
    }
  })

});