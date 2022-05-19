function chromosomeCheck(sperm) {
  const boyResp = "Congratulations! You're going to have a son.";
  const girlResp = "Congratulations! You're going to have a daughter.";
  return sperm === "XX" ? girlResp : boyResp;
}
