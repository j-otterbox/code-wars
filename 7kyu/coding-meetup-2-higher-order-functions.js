function greetDevelopers(list) {
  list.forEach((e) => {
    e.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`;
  });
  return list;
}
