function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const currDate = new Date(currentDate);
  const exprDate = new Date(expirationDate);

  return enteredCode === correctCode && exprDate - currDate >= 0;
}
