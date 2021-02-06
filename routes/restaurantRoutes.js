const express = require('express');
const Restaurant = require('../models/restaurant');
const FavoriteRestaurant = require('../models/favRestaurant');
const router = express.Router();



// Delete one
router.get('/delete/:_id', (req, res) => {
    const {_id} = req.params;
    FavoriteRestaurant.deleteOne({_id})
        .then( ()=>{
            console.log('Uspesno obrisano');
            res.redirect("/restaurant/favorite");
        })
        .catch((err)=>{
            console.log(err);
        })
});


router.get('/', (req, res) => {
    Restaurant.find()
        .then((result) => {
            res.render('index', { restaurants: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

//Add favorite restaurant
router.post('/restaurant/favorite', (req, res) => {
    const favRestaurant = new FavoriteRestaurant(req.body);
    console.log(req.body);
    favRestaurant.save()
        .then((result) => {
            res.redirect('/restaurant/add');
        })
        .catch((err) => {
            console.log(err);
        })
});


//get selected restaurants
router.get('/restaurant/single/:id', (req, res) => {
    const id = req.params.id
    Restaurant.findById(id)
        .then((result) => {
            res.render('restaurant', { restaurant: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

//add your restaurant
router.get('/restaurant/add',  async (req, res) => {
    const lastRestaurant = await FavoriteRestaurant.find().limit(1).sort({$natural:-1});
    console.log(lastRestaurant);
    res.render('add', { lastRestaurant: lastRestaurant });
});

router.get('/restaurant/favorite', (req, res) => {
    FavoriteRestaurant.find()
        .then((result) => {
            res.render('favorite', { favRestaurant: result });
        })
        .catch((err) => {
            console.log(err);
        })
});


module.exports = router;