 //initialization function to insert cells into the table
function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
  
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
       
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      } 

      tbody.appendChild( row );
   } 

   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );

   // register Clear button listener 
   document.getElementById( "clearButton" ).addEventListener( 
      "click", clearCanvas, false );
} // end function createCanvas

// processes the onmousemove event
function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      } 

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } 
      
      if ( e.altKey )
      {
         e.target.setAttribute( "class", "white" );      
      } 
   } 
} // end function processMouseMove

function clearCanvas()
{
   var tablebody = document.getElementById( "tablebody" )
   var tableParent = tablebody.parentNode;
   tableParent.removeChild( tablebody );
   var newTableBody = document.createElement( "tbody" );
   newTableBody.id = "tablebody";
   tableParent.appendChild( newTableBody );
   createCanvas();
} 

window.addEventListener( "load", createCanvas, false );

