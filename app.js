
const express = require('express');
const app = express();
// const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));

module.exports = app;

// const charities = require('./controllers/charities')(app)
// const opinions = require('./controllers/opinions')(app)
// const users = require('./controllers/users')(app);

const User = require('./models/user')
const admin = require('./controllers/admin.js');
const login = require('./controllers/login.js');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/charity-tracker', {useNewUrlParser: true});





// app.listen(3000, () => {
//   console.log('App listening on port 3000!')
// })
// Added after heroku
const port = process.env.PORT || 3000;
app.listen(port);