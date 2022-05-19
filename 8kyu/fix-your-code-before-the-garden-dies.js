function rainAmount(mm) {
  const waterOkResp = "Your plant has had more than enough water for today!";
  const addWaterResp = `You need to give your plant ${40 - mm}mm of water`;

  return mm >= 40 ? waterOkResp : addWaterResp;
}
