const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Jokes_API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//connects to MongoDB

    .then( () => console.log('Established a connection to the database'))
    .catch( () => console.log('Something went wrong when connecting to the database', err));
