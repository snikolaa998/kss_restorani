const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');
const updateRoutes = require('./routes/updateRoutes');
//express app
const app = express();

//conect to mongodb
const dbURI = 'mongodb+srv://nikola_nodejs:nikola123@nodejsapp.we6ko.mongodb.net/restaurant_app?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


//Restaurant Routes
app.use(restaurantRoutes);
app.use(updateRoutes);
