function periodIsLate(last, today, cycleLength) {
  return today.getTime() - last.getTime() > cycleLength * 86400000;
}
