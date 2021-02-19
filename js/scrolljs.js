

// MODULO PARA MANEJO DEL BTNVOLVERINICIO
//  !>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var btnInicioX =  document.querySelectorAll(".btnAnimado");
var navbarX = document.querySelectorAll("#ratitas");
function f1()
{

        var recorrido = document.documentElement.scrollTop;
        var anchopantalla = window.screen.width;
        recorrido = recorrido.toFixed(0);
        var alturapantalla = window.screen.height;
        var alturapagina = document.documentElement.scrollHeight;
        var dif = -Number.parseInt(alturapagina)+Number.parseInt(recorrido) -132+Number.parseInt(alturapantalla)  +60;
   //     document.getElementsByClassName("otros")[0].innerHTML = "diferencia: " + dif;   
        
        if(anchopantalla<1000)
        {
            dif = dif+60;
        }
  
        if(dif>=0)
        {
          btnInicioX[0].style.bottom= (70+dif)+"px" ;
        }
        else
        {
            btnInicioX[0].style.bottom= 50+"px";
        }
        

    if(recorrido>350)
    {   btnInicioX[0].style.opacity =1;
    }
    else
    {btnInicioX[0].style.opacity =0;
       
    }
    if(recorrido>300)
    {   navbarX[0].style.backgroundColor = "black";
        navbarX[0].style.top = 0    ;
    }
    else
    {  navbarX[0].style.backgroundColor = "transparent";
        navbarX[0].style.top = 0;
       
    }

    
}
window.addEventListener('scroll' , f1);


