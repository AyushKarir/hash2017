$(document).ready(function(){

$("#hash").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()
    },700);
});
$("#aviral").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*4
    },700);
});
});