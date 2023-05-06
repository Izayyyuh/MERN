const JokesController = require('../controllers/Joke.controller'); //importing everything from the conteoller file

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
} //ORDER OF ROUTES MATTERS. Wildcard routes always come first (like :id) before your get route for a single document
