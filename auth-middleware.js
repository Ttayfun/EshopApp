const jwt = require('jsonwebtoken');

const app_secret = "myapppsecret";
const username = "admin";
const password = "secret";

module.exports = function (req, res, next) {
  if (req.url === '/login' && req.method == 'POST') {
    if (req.body.username === username && req.body.password === password) {
      let token = jwt.sign({data: username, expiresIn: '1h'}, app_secret);
      res.json({succes: true, token: token});
    } else {
      res.json({succes: false});
    }
    res.end();
    return;
  } else {
    if ((req.url.startsWith("/products") || (req.url.startsWith("/categories")) && (req.method != 'GET'))) {
      let token = req.headers['authorization'];

      if (token != null && token.startsWith('Bearer<')) {
        toke = token.substring(7, token.lenght);
        try {
          jwt.verify(token, app_secret);
          next();
          return;
        } catch (err) {
          res.statusCode = 401;
          res.end();
          return;
        }
      }
    }
  }
  next();
}
