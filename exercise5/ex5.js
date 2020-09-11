var theImg;
var mouseX;
var mouseY;
var zIndex;

function start() 
{
   document.addEventListener( "mousedown", startDrag, false );
   document.addEventListener( "mouseup", stopDrag, false );
   theImg = document.getElementById( "jhtp" );
   zIndex = 0;
   mouseX = 0;
   mouseY = 0;
} 
 
function startDrag( e )
{
   if ( e.target == theImg )
   {
      document.addEventListener( "mousemove", updateImageLocation, false );
   } 
} 

function stopDrag()
{
   document.removeEventListener( "mousemove", updateImageLocation, false );
} 

function updateImageLocation( e )
{
   theImg.setAttribute( "style", "top: " + e.clientY + "px; " +
      "left: " + e.clientX + "px" );
} 

window.addEventListener( "load", start, false );
