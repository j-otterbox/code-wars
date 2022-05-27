function validate(username, password) {
  var database = new Database();
  const isValidPw = !password.includes("//") && !password.includes("||");
  return isValidPw
    ? database.login(username, password)
    : "Wrong username or password!";
}
