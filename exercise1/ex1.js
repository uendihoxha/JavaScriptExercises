// Exercise 1 Solution 
var month;
var day
var year;
var output;

function start()
{
   document.getElementById( "displayButton" ).addEventListener(
      "click", displayDate, false );

   month = document.getElementById( "month" );
   day = document.getElementById( "day" );
   year = document.getElementById( "year" );
   output = document.getElementById( "output" );
} // end function start

function displayDate() 
{
   var m = parseInt( month.value ) - 1;
   var d = parseInt( day.value );
   var y = parseInt( year.value );

   var date = new Date( y, m, d );
   output.value = "date.toString(): " + date.toString() +
      "\ndate.toLocaleString(): " + date.toLocaleString() +
      "\ndate.toUTCString(): " + date.toUTCString();        
} // end function displayDate

window.addEventListener( "load", start, false );


