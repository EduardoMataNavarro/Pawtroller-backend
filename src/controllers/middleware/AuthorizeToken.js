import jwt from 'jsonwebtoken';

const AuthToken = { };

AuthToken.authorize = async (req, res, next) =>{
    if(algoPasa == true){
        next();
    }
    else {
        res.status(401).send('No se puede');
    }
};