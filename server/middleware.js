const jwt = require('jsonwebtoken');
// Keep hidden in extrnal variable do not push to git
const secret = process.env.MY_SECRET;

const withAuth = (req, res, next) => {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;

        if(!token){
            res.status(401).send('Unauthorized: No token provided');
        } else {
            jwt.verify(token, secret, (err, decoded) => {
                if(err){
                    res.status(401).send('Unauthorized: Invalid token');
                } else {
                    req.email = decoded.email;
                    next();
                }
            });
        }
};

module.exports = withAuth;