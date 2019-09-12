$(document).ready(function(){

$("#arrow").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()
    },700);
});
});