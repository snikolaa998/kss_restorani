const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favRestaurantSchema = new Schema({
    ime: {
        type: String,
        required: true
    },
    opis: {
        type: String,
        required: true
    },
    lokacija: {
        type: String,
        required: true
    }
});

const FavRestaurant = mongoose.model('FavoriteRestaurant', favRestaurantSchema);
module.exports = FavRestaurant;