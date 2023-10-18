const session = require("express-session");

module.exports = (redistoreProp) =>
  session({
    store: redistoreProp,
    secret: "secret-key",
    saveUninitialized: false, // recommended: only save session when data exists
    resave: false,
    name: "sessionId",
    cookie: {
      secure: false, //if true, only transfer cookie over https
      httpOnly: true, // if true >> prevents clients side JS from reading the cookie
      maxAge: 1000 * 60 * 30, //session max Age in miniseconds
    },
  });
