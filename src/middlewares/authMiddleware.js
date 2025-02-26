import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization; 
};

export default verifyToken;