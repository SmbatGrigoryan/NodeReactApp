module.exports = (req, res, next) => {
  if (req.user.credits < 100) {
    return res.status(403).send({error: 'you dont have enouth Credits'});
  }
  next();
};