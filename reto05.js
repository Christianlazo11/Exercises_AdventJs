const date1 = new Date("Dec 1, 2021");
const date2 = new Date("Dec 24, 2021 00:00:01");
const date3 = new Date("Dec 24, 2021 23:59:59");
const date4 = new Date("December 20, 2021 03:24:00");
const date5 = new Date("December 29, 2021 03:24:00");
const date6 = new Date("Dec 25, 2021");
const date7 = new Date("Dec 26, 2021");
const date8 = new Date("Dec 31, 2021");
const date9 = new Date("Jan 1, 2022 00:00:01");
const date10 = new Date("Jan 1, 2022 23:59:59");
const date11 = new Date("Nov 10, 2022 23:59:59");

const months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
//Esta Solución esta muy culera toca Refactorizar xD
function daysToXmas(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentMonth = 12;
  if (month === currentMonth) {
    if (day === 25) {
      return 0;
    } else if (day > 25) {
      return (day - 25) * -1;
    } else if (day < 25) {
      return 25 - day;
    }
  } else if (month !== currentMonth) {
    if (year === 2021) {
      if (month < currentMonth) {
        return months[month] - day + 25;
      }
    } else if (year > 2021) {
      return (months[12] + day - 25) * -1;
    }
  }
}

console.log(daysToXmas(date10));
