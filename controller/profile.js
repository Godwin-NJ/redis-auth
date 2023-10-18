const sessionProfile = (req, res) => {
  res.json(req.session);
};

module.exports = { sessionProfile };
