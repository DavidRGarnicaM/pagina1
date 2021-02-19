var ele = document.getElementsByClassName("deslizableT1"); 
var ele2 = document.getElementsByClassName("deslizableT2"); 
var ele3 = document.getElementsByClassName("deslizableT3"); 
var btabb = document.getElementById("btn-abb2");
var btarr = document.getElementById("btn-arr2");



function baja(elemX)
{
    ele[elemX].style.top = "-" + 50+ "px";
    ele[elemX].style.backgroundColor = "transparent";
    btarr.style.display ="block";

    btabb.style.display ="none";
 
}
function sube(elemX)
{
    ele[elemX].style.top = "-" + 200+ "px";
    ele[elemX].style.backgroundColor = "red";
    btarr.style.display ="none";
    btabb.style.display ="block";
    btabb.style.top ="0";
    
}

function rIzq(elemX)
{
    ele2[elemX].style.left = "-" + 200+ "px";
    ele2[elemX].style.backgroundColor="transparent";
   
   
}
function rDer(elemX)
{
    ele2[elemX].style.left = 0;
    ele2[elemX].style.backgroundColor="red";
    
 
 
}
function apCen(elemX)
{
ele3[elemX].style.opacity =1;
}
function desCen(elemX)
{
 ele3[elemX].style.opacity =0;
}

