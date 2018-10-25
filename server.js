const express = require('express');
const app = express();
const mongoose = require('mongoose');

// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('hello');
//   console.log('hello');
// });
//
const resortController = require('./controllers/resorts.js');
app.use('/resorts', resortController);



mongoose.connect('mongodb://localhost:27017/resorts', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});

app.listen(3000, ()=>{
    console.log('listening...');
});
