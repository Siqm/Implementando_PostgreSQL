const express = require('express');
const UserController = require('./controllers/UserController');


// A router object is an isolated instance of middleware and routes.
// You can think of it as a “mini-application,” capable only of 
// performing middleware and routing functions. Every Express 
// application has a built-in app router.
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Hello: 'World' })
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;