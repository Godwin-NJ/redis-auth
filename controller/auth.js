const authService = require("../service/auth");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json("invalid credentials");
  }
  //check if the credentials are correct
  //....
  try {
    const user = await authService.login(email, password);
    req.session.user = user;
    res.sendStatus(204);
  } catch (error) {
    // in prod, do not use console.log or console.error
    // use a proper logging library like winston
    console.error(error);
    res.status(401).json(error);
  }
  //assume that the credentials are correct

  // req.session.clientId = "abc123";
  // req.session.myNum = 5;

  // res.json("You are now logged in");
};

module.exports = { loginUser };
