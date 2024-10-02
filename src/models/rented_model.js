const mongoose = require('mongoose');

const rentedSchema = new mongoose.Schema({
    rente_by: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true 
    },
    movie_rented: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true
    },
    rent_date: {
        type: Date, default: Date.now 
    },
    return_date: { 
        type: Date 
    }
});

const Rented = db.model("Rentend", rentedSchema);

export default Rented;