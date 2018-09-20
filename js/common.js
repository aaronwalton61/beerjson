function wherecolor(fdate, fstr)
{
       if ( fdate == null )
           fcolor = "'grey'";
       else
           fcolor = "''";

      switch ( substr(fstr, 0, 4) )
      {
         case "Home":
	    fcolor = "'green'";
            break;
         case "Taco":
	    fcolor = "'blue'";
            break;
         case "Hoot":
	    fcolor = "'orange'";
            break;
         case "Summ":
	    fcolor = "'tan'";
            break;
         case "Tilt":
	    fcolor = "'red'";
            break;
         case "Mell":
	    fcolor = "'purple'";
            break;
         case "xxxx":
	    fcolor = "'yellow'";
            break;
         case "XXXX":
	    fcolor = "'brown'";
            break;
         case "XXXX":
	    fcolor = "'red'";
            break;
         default:
            fcolor = "''";
            break;
      }

   return fcolor;
}
/*
function grouprows( char, last )
{
   // Print headers/Groups for each letter as it shows up with # for everything before 'A'
   // begin with last=' ';  Call this before every list entry for a row.
   if ( last == ' ' || last == '#' )
   {
      if ( char >= 'A' && char <='Z' )
      {
         last = char;
         echo "<li class='group' id='{last}'>{last}</li>";
      }
      else
      {
         if ( last == ' ' )
            echo "<li class='group' id='#'>#</li>";
         last = '#';
      }
   }
   else
   {
   if ( char >last )
      {
         while ( char >last )
            last++;
         echo "<li class='group' id='{last}'>{last}</li>";
      }
   }
   return last;
}
*/
function icons( fstr )
{
   fgraf = " ";
//   if (stripos( fstr, ":") != FALSE)
//      temp = substr(fstr, 0, stripos( fstr, ":"));
//   else
      temp = fstr.toLowerCase();

   // Appearance
   if ( temp.includes("dark") )
	;
   if ( temp.includes("light") )
	;
   if ( temp.includes("amber") )
	;
   if ( temp.includes("red") )
	;
   // Mouthfeel
   if ( temp.includes("stout") )
	;
   if ( temp.includes("wheat") )
	;
   if ( temp.includes("ale") )
	;

   if ( temp.includes("high") )
	fgraf = fgraf + "<img title='High Gravity >6%' src='images/tulip.gif'>";

   if ( temp.includes("bottle") )
	fgraf = fgraf + "<img title='in a Bottle' src='images/bottle.png'>";
   if ( temp.includes("draft") )
	fgraf = fgraf + "<img title='On Draught' src='images/draught.gif'>";
   if ( temp.includes("draught 11") )
	fgraf = fgraf + "<img title='On Draught' src='images/tulip.gif'>";
   else { // if not 11 then check for just draught
        if ( temp.includes("draught") )
	        fgraf = fgraf + "<img title='On Draught' src='images/draught.gif'>";
   }
   if ( temp.includes("cask") )
	fgraf = fgraf + "<img title='Cask/Firkin' src='images/cask.png'>";
   if ( temp.includes("can") )
	fgraf = fgraf + "<img title='Can' src='images/can.png'>";
   // Hoppyness
   if ( temp.includes("hop") )
	fgraf = fgraf + "<img title='Hoppy' src='images/hop.png'>";
   if ( temp.includes("hop+") )
	fgraf = fgraf + "<img title='Hoppy+' src='images/hop.png'>";
   if ( temp.includes('hop++') )
	fgraf = fgraf + "<img title='Hoppy++' src='images/hop.png'>";

   if ( fgraf == " " )
        fgraf = fgraf + "<img title='No Container' src='images/what.png'>";

   return fgraf;
}
