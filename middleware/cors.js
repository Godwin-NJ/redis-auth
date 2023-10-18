const cors = require("cors");

const whiteList = new Set(["http://example1.com", "http://example2.com"]);

const corsoptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  origin: function (origin, callback) {
    if (whiteList.has(origin)) {
      callback(null, true);
    } else {
      callback(new error("not allowed by cors"));
    }
  },
  credentials: true,
};

module.exports = cors(corsoptions);
