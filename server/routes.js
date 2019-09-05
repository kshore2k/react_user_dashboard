const controller = require('./controller');
const withAuth = require('./middleware');

module.exports = (app) => {
    app.get('/api/home', controller.home);
    app.get('/api/secret', withAuth, controller.secret);
    app.get('/checktoken', withAuth, controller.checkToken);
    app.get('/api/users', withAuth, controller.allUsers);
    app.get('/api/logout', controller.logout);
    app.post('/api/register', controller.create);
    app.post('/api/authenticate', controller.auth);
};