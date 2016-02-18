// Friendly Date Ranges.js

// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
function friendly(arr) {
  var date1 = /(\d{4})[-](\d{2})[-](\d{2})/.exec(arr[0]);
  // [ '2016-07-01', '2016', '07', '01', index: 0, input: '2016-07-01' ]
  var date2 = /(\d{4})[-](\d{2})[-](\d{2})/.exec(arr[1]);

  function year(date) {
    return date[1];
  }

  function month(date) {
    var month = date[2];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[(+month - 1)];
  }

  function day(date) {
    var day = date[3];

    // remove leading zero
    day = day.replace(/^0/, '');
    if (day == 1) {
      return "1st";
    } else if (day == 2) {
      return "2nd";
    } else if (day == 3) {
      return "3rd";
    } else {
      return day + "th";
    }
  }

  date1 = month(date1) + " " + day(date1) + ", " + year(date1);
  date2 = month(date2) + " " + day(date2) + ", " + year(date2);

  return [date1, date2];
}
