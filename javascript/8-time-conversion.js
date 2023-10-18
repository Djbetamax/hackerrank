/**
 * * Complete the 'timeConversion' function below.
 *
 * @param STRING 
 * @returns STRING
 */

function timeConversion(s) {
	// Write your code here
   let fullTime,
      hours = 12,
      hh = parseInt(s.slice(0, 2)),
      mm = s.slice(3, 5),
      ss = s.slice(6, 8),
      period = s.slice(-2);
   
   if (period == "PM") {
      hh == 12 ? hh = 12 : hh += hours
   } else {
      hh == 12 ? hh = '00' : hh < 10 ? hh = `0${hh}` : hh;
   }

   fullTime = `${hh}:${mm}:${ss}`;

   console.log(fullTime);
   return fullTime;
}

timeConversion("08:00:00AM");