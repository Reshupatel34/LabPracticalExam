import auth from '../middleware/authMiddleware.js'

import express from 'express';


const route=express.Router();


route.get('/public', (req, res) => {
    res.send('Welcome to public route');
});

route.get('/private', auth, (req, res) => {
    res.send('Welcome to private route');
});

export default route;