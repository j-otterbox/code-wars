function yearDays(year) {
  if (year % 100 === 0) {
    return `${year} has ${year % 400 === 0 ? 366 : 365} days`;
  } else {
    return `${year} has ${year % 4 === 0 ? 366 : 365} days`;
  }
}
