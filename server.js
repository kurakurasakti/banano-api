const express = require('express'); //import library
const app = express();

// const db = require('./config/dbConfig');

const bodyParser = require('body-parser'); //buat get data dari json body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/router')(app);

const port = process.env.PORT || 2001;

app.listen(port, "0.0.0.0", function() {
    console.log("listening to port " + port)
})

app.get('/', (req,res)=>{
    res.send('<h1>hallo</h1>');
})

// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync with { force: true }');
// });

