// ex2.js Solution 
var total = [ , , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var outputString;

function start()
{
   for ( var x = 1; x <= 36000000; x++ ) 
   {
      var face1 = rollDie();
      var face2 = rollDie();

      ++total[ face1 + face2 ];
   } 

   outputResults();
} 

// the following functions execute only when called
function rollDie()
{
   return Math.floor( 1 + Math.random() * 6 );
} // end function rollDie

function outputResults()
{
   outputString = "<h2>Roll Dice 36000000 Times</h2>";
   outputString += "<table border = '1'>" +
      "<tr><th width = '100'>Sum of Dice" + 
      "<th width = '200'>Total Times Rolled</tr>";

   for ( var i = 2; i < total.length; ++i ) 
      outputString += "<tr><td>" + i + "<td>" + total[ i ] + "</tr>";

   outputString += "</table>" +
      "<p>Click Refresh (or Reload) to run this script again</p>";   

   var output = document.getElementById( "output" );
   output.innerHTML = outputString;
} // end function outputResults      

window.addEventListener( "load", start, false );

