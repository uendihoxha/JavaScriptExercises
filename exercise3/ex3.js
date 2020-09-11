var RACE_END = 70;
var tortoise; // tortoise position
var hare; // hare position
var outputString; 

function start()
{
   var raceButton = document.getElementById( "raceButton" );
   raceButton.addEventListener( "click", race, false );
} 

function race()
{
   var timer = 0;
   outputString = "";
   tortoise = 1;
   hare = 1;

   outputString = "<pre>";
   outputString += "<p>ON YOUR MARK, GET SET</p>";
   outputString += "<p>BANG               !!!!</p>";
   outputString += "<p>AND THEY'RE OFF    !!!!</p>";

   while ( tortoise != RACE_END && hare != RACE_END )
   {         
      moveHare();
      moveTortoise();
      printCurrentPositions();
      ++timer;
   } // end while

   if ( tortoise >= hare )
      outputString += "<p>TORTOISE WINS!!! YAY!!!</p>";
   else
      outputString += "<p>Hare wins. Yuch!</p>";

   outputString += "<p>TIME ELAPSED = " + timer + " seconds</p>";
   outputString += "</pre>";
   document.getElementById("output").innerHTML = outputString;
} // end function race

function moveTortoise()
{
   var x = parseInt( 1 + Math.random() * 10 );
   var tortoiseMoves = [ 3, 6 ];

   if ( x >= 1 && x <= 5 ) // fast plod
      tortoise += parseInt( tortoiseMoves[ 0 ] );
   else if ( x == 6 || x == 7 ) // slip
      tortoise -= parseInt( tortoiseMoves[ 1 ] );
   else                // slow plod
      ++tortoise;

   if ( tortoise < 1 )
      tortoise = 1;
   else if ( tortoise > RACE_END )
      tortoise = RACE_END;
} // end function moveTortoise

function moveHare()
{
   var y = parseInt( 1 + Math.random() * 10 );
   var hareMoves = [ 9, 12, 2 ];

   if ( y == 3 || y == 4 ) // big hop
      hare += parseInt( hareMoves[ 0 ] );
   else if ( y == 5 ) // big slip
      hare -= parseInt( hareMoves[ 1 ] );
   else if ( y >= 6 && y <= 8 ) // small hop
      ++hare;
   else if ( y > 8 ) // small slip
      hare -= parseInt( hareMoves[ 2 ] );

   if ( hare < 1 )
      hare = 1;
   else if ( hare > RACE_END )
      hare = RACE_END;
} 

function printCurrentPositions()
{
   outputString += "<p>";

   for ( var count = 1; count <= RACE_END; count++ )
   { 
      if ( count == tortoise && count == hare )
         outputString += "OUCH!!!";
      else if ( count == hare )
         outputString += 'H';
      else if ( count == tortoise )
         outputString += 'T';
      else 
         outputString += ' ';
   } 

   outputString += "</p>";
} 

window.addEventListener( "load", start, false );

