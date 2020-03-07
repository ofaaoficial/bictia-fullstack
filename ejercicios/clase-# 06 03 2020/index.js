console.log('Hello world');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bictia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, res) => {
    if (error) console.log(error);
    else console.log('Nos conectamos correctamente.')
});



