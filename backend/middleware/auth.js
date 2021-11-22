const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = "";
    if (req.headers.authorization) token = req.headers?.authorization.split(' ')[1];
    else token = req.body.token;
    // const token = req.headers?.authorization.split(' ')[1] 
    next();
    return;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
      return
    }
  } catch (err) {
    console.log("err MIDLEWARE JWT", err);
    res.status(401).json({
      error: err,
    });
  }
};