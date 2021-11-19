const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jeffersonhenao:0911@cluster0.rr3f6.mongodb.net/contratos?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));