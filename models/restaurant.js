const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    ime: {
        type: String,
        required: true
    },
    radno_vreme: {
        type: String,
        required: true
    },
    telefon: {
        type: String,
        required: true
    },
    lokacija: {
        type: String,
        required: true
    },
    meni: {
        type: Array,
        required: true
    },
    opis: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;