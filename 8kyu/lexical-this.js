var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      for (const elem of f) {
        this._friends.push(elem);
      }
    },
  };
  return person;
};
