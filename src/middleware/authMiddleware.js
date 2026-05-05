


const auth = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token === 'admin123') {
        res.status(200).send("Acces Authorised and welcome");
    } else {
        res.status(403).send('Access Unauthorised and access not allowed');
    }
    next();
};

export default auth;

