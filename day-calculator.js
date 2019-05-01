

function calculateDayInYear(date) {
  var splitDate = date.split('/'); // [ '2000', '3', '2' ]
  // console.log(splitDate)
  var year = Number(splitDate[0]); // 2000
  // console.log(year)
  var month = Number(splitDate[1]); // 3
  // console.log(month)
  var day = Number(splitDate[2]); // 2
  // console.log(typeof day)
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// answer
  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

// validate month -- GOOD
  function validMonth(month) {
    return month && month >= 1 && month <= 12;
  }

// validate day --- GOOD
  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }

// calculate day number // "2012/2/29") === 60); // yes
  function calculateDayNumber(month, day) {
    var dayOfYear = 0;

    for (var i = 0; i < month - 1; i++) {
      dayOfYear += DAYS_IN_MONTH[i] ;
    }
    return dayOfYear + day;
  }

// february -- GOOD
  function daysInFeb(year) {
    if(isLeapYear(year)){
      return 29
    } else {
       return 28;
    }
  }

// check if it is leap year - GOOD
  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

//==================================================================================
// end of the first function

// check if number is divisible by 4 and not divisible by 100
function isMultiple(numerator, denominator) {
  return numerator % denominator === 0; // returns true or false
}


var date = process.argv[2];

// correct input check
if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  // calling the first function here, passing the date
  calculateDayInYear(date);
}

/*
    Below are some simple tests!

    They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

    The console.log will output either 'true' or 'false' based on whether or not the function
    returns a value that matched our expected value.

    You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61); // not leap
console.log(calculateDayInYear("2000/3/2") === 62); // yes
console.log(calculateDayInYear("2012/2/29") === 60); // yes
console.log(calculateDayInYear("2015/12/31") === 365); // not leap
