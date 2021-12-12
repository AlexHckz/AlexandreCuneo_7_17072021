const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let token = "";
    console.log("req.body.token", req.body.token);
    if (req.headers.authorization) token = req.headers?.authorization.split(' ')[1];
    else token = req.body.token;
    // const token = req.headers?.authorization.split(' ')[1] 
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    req.body.decodedToken = decodedToken; //userId
    next();
    return
  } catch (err) {
    console.log("err MIDLEWARE JWT", err);
    res.status(401).json({
      error: err,
    });
  }
};