$(document).ready(function(){
    //efecto del menu
$('.menu a').each(function(index, elemento){
 $(this).css({
   'top':'-200px'
 });
 $(this).animate({
    top: '0'
 }, 2000 + (index * 500));
});
//efecto header
if( $(window).width()> 800){
    $('header .textos').css({
        opacity: 0,
        marginTop: 0
    });
    $('header .textos').animate({
        opacity: 1,
        marginTop: '-52px'
    }, 1500);

}
//scroll elementos menu
var acercaDe = $()
});