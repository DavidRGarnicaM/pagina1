//almacenar slider en una variable
var sliderX = $('#slider');
// almacenar los botones
var siguiente=$('btn-next');
var anterior=$('btn-prev');
// mover ultima seccion a primera
$('#slider section:last').insertBefore('#slider section:first');
//desplazar la segunda imagen
sliderX.css('margin-left', '-'+100+'%');

function moverD()
{
    sliderX.animate({marginLeft:'-'+200+'%'},700,function()
         {
            $('#slider section:first').insertAfter('#slider section:last');
            sliderX.css('margin-left', '-'+100+'%');
         });
};
function moverI()
{
    sliderX.animate({marginLeft:0},700,function()
         {
            $('#slider section:last').insertBefore('#slider section:first');
            sliderX.css('margin-left', '-'+100+'%');

         });
}

function autoslider()
{
    invertal = setInterval(function(){moverD();},3000);
}
function pausar()
{
   
    clearInterval(invertal);
}
function continuar()
{
    autoslider();
}
autoslider();
