const jwt = require('jsonwebtoken');

const AuthToken = {};

AuthToken.authorize = async (req, res, next) => {
    const token = req.get('auth-token');

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, verifiedToken) => {
            if (err) {
                res.status(401).send({ messaje: 'Cannot access to this resource' });
            }
            else {
                req.user = verifiedToken;
                next();
            }
        });
    }
    else {
        res.status(401).send({ message: 'Cannot access to this resource' });
    }
};

module.exports = AuthToken;