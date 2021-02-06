const express = require('express');
const Restaurant = require('../models/restaurant');
const FavoriteRestaurant = require('../models/favRestaurant');
const routerOne = express.Router();

routerOne.post('/restaurant/single/update', function(req, res) {
    const {_id} = req.body;
    const {ime} = req.body;
    const {opis} = req.body;
    const {lokacija} = req.body;
    console.log(`Id je: ${_id}`);
    FavoriteRestaurant.updateOne({_id:_id.trim()}, {ime: ime, opis: opis, lokacija: lokacija}, function(err,res){
        if(err) throw err;
        console.log('Restoran update-ovan');
    })
    res.redirect("/restaurant/favorite");
});

module.exports = routerOne;