const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.duc0h.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));