import db from "../config/db.js";

const rentedSchema = new db.Schema({
    rente_by: { 
        type: db.Schema.Types.ObjectId, ref: 'User', required: true 
    },
    movie_rented: { 
        type: db.Schema.Types.ObjectId, ref: 'Movie', required: true
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