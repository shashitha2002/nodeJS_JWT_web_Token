const authorizeRole = (...allowedUsers) => {

    return (req,res,next) => {
        if(!allowedUsers.includes(req.user.role)) {
            return res.status(403).json({ message: "user is not allowed to access this route!" });
        }
        next();
    }

};

export default authorizeRole;