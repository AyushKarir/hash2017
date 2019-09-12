$(document).ready(function(){

$("#members").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()
    },700);
});
$("#members").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*3
    },700);
});
});