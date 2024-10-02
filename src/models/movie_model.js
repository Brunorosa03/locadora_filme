const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({ 
    name: {
        type: String, required: true 
    },
    release_date: { 
        type: Date, required: true 
    },
    director: {
        type: String, required: true },
    classification: {   
        type: String,enum: ['Livre', 'Maior16', 'Maior18'], required: true 
    }
});

const Movie = db.model("Movie", movieSchema);

export default Movie;