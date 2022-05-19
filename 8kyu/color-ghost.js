function Ghost() {
  this.color = (() => {
    const rand = Math.ceil((Math.random() * 10) % 4);
    const colors = { 1: "white", 2: "yellow", 3: "purple", 4: "red" };
    return colors[rand];
  })();
}
