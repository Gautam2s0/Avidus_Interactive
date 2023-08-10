const jwt = require("jsonwebtoken");
require("dotenv").config();


const UserID = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.secretKey);
    if (decoded) {
      const userId = decoded._id;
      req.body.userID = userId;
      next();
    } else {
      res.send("Please Login First");
    }
  } else {
    res.send("Please Login First");
  }
};


module.exports = {
    UserID
};
