function whatday(num) {
  const days = new Map();

  days.set(1, "Sunday");
  days.set(2, "Monday");
  days.set(3, "Tuesday");
  days.set(4, "Wednesday");
  days.set(5, "Thursday");
  days.set(6, "Friday");
  days.set(7, "Saturday");

  return days.get(num) || "Wrong, please enter a number between 1 and 7";
}
