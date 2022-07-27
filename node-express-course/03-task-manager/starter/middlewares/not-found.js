const notFound = (req, res) =>
  res.status(404).send("Route does not exist BWANA");

module.exports = notFound;
