function getWeekday(dateStr) { // format: "March 3 1987"
  let [month, day, year] = dateStr.split(' ')
  const monthCode = getMonthCode(month);
  const [centuryCode, decadeCode] = getYearCode(year);
  const leapYearCode = leapYear(year, month);
  const dayCode = (decadeCode + centuryCode + monthCode + Number(day) - leapYearCode) % 7
  return getDay(dayCode)
}

function getYearCode(year) {
  year = year.split('');
  let century = year.slice(0, 2).join(''), decade = year.slice(2).join('');
  let decadeNumber = Number(decade);
  let decadeCode = (Math.floor(decadeNumber / 4) + decadeNumber) % 7

  let centuries = { 17: 4, 18: 2, 19: 0, 20: 6, 21: 4, 22: 2, 23: 0 }, centuryCode = centuries[century];
  return [centuryCode, decadeCode]
}

function leapYear(year, month) {
  year = Number(year);
  const leapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? true : false;
  if ((month === "January" || month === "February") && leapYear === true) return 1;
  return 0;
}

function getMonthCode(month) {
  const months = {
    January: 0, Feburary: 3, March: 3, April: 6, May: 1, June: 4,
    July: 6, August: 2, September: 5, October: 0, November: 3, December: 5
  }
  return months[month]
}

function getDay(day) {
  const days = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" }
  return days[day]
}

console.log("May 8 2020")
console.log(getWeekday("May 8 2020"))
console.log("May 8 1992")
console.log(getWeekday("May 8 1992"))
console.log("July 7 1989")
console.log(getWeekday("July 7 1989"))
console.log("March 14 1897")
console.log(getWeekday("March 14 1897"))
console.log("January 3 1992")
console.log(getWeekday("January 3 1992"))
console.log("December 12 1958")
console.log(getWeekday("December 12 1958"))
console.log("October 30 1956")
console.log(getWeekday("October 30 1956"))