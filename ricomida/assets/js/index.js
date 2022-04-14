/* Desaparecer con dos clicks */
$(document).ready(function(slow){
    $("p").dblclick(function(){
        $(this).hide("slow");
        });

/* Color rojo al dar un click */
$("p").click(function(){
    $(this).css({
    "color": "red",
    "font-size": "2em"
    });
});

/* Hover */
$("h1").hover(function(){
    $(this).html("<a href='#'>Me convertí</a>");
    });

});