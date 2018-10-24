const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello');
  console.log('hello');
});






app.listen(3000, ()=>{
    console.log('listening...');
});
