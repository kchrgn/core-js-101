/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
 function isLeapYear(date) {
  const year = date.getFullTear();
  if (year % 4) return false;
  if (year % 100) return true;
  if (year % 400) return false;
  return true;
}

console.log(isLeapYear( Date(1900,1,1)));
